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
  const [currentIndex, setIndex] = useState(0)
  function goPrev() {
    let index = currentIndex
    if (index > 0) {
      const image = imagesRef.current[index].current
      image.exit()
      index = index - 1
      setIndex(index)
    }
  }
  function goNext() {
    let index = currentIndex
    if (index < totalImages - 1) {
      index = index + 1
      const image = imagesRef.current[index].current
      image.enter()
      setIndex(index)
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

  function handleKeyDown(e) {
    if (e.key === 'ArrowRight') {
      goNext()
    } else if (e.key === 'ArrowLeft') {
      goPrev()
    }
  }

  return (
    <div className="slideshow-container" onKeyDown={handleKeyDown} tabIndex={0}>
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
        <div className="slide-index">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
    </div>
  )
}
