import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import './Slideshow.css'
import MenuTop from '../../components/MenuTop/MenuTop'
import slideshowConfig from './slideshow.json'

const totalImages = slideshowConfig.reduce(
  (t, cont) => t + cont.images.length,
  0
)

function AnimatedImageBase({ style, animatedStyle, time, src }, ref) {
  const [entered, setEntered] = useState(false)

  let imageStyle = style
  if (entered && animatedStyle) {
    imageStyle = { ...imageStyle, ...animatedStyle }
  }

  useImperativeHandle(ref, () => ({
    enter: () => {
      setEntered(true)
    },
    exit: () => {
      setEntered(false)
    },
  }))

  return <img style={imageStyle} src={src} alt="Slide" />
}

const AnimatedImage = React.forwardRef(AnimatedImageBase)

export default function Slideshow() {
  const indexRef = useRef(0)
  function goPrev() {
    let index = indexRef.current
    if (index > 0) {
      const image = imagesRef.current[index].current
      image.exit()
      index = index - 1
      indexRef.current = index
    }
  }
  function goNext() {
    let index = indexRef.current
    if (index < totalImages - 1) {
      index = index + 1
      const image = imagesRef.current[index].current
      image.enter()
      indexRef.current = index
    }
  }

  let z = 0
  const imagesRef = useRef({})
  function imageRef(i) {
    if (!imagesRef.current[i]) {
      imagesRef.current[i] = React.createRef()
    }
    return imagesRef.current[i]
  }

  useEffect(() => {
    const image = imagesRef.current[0].current
    image.enter()
  }, [])

  return (
    <div className="slideshow-container">
      <MenuTop />
      <div className="slideshow-content">
        {slideshowConfig.map((container, i) => (
          <div key={i} style={container.style}>
            {container.images.map((image, j) => {
              z++
              return <AnimatedImage ref={imageRef(z - 1)} key={j} {...image} />
            })}
          </div>
        ))}
        <div onClick={goPrev} className="slide-click-spy-prev" />
        <div onClick={goNext} className="slide-click-spy-next" />
      </div>
    </div>
  )
}
