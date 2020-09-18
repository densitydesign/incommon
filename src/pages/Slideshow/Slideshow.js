import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import './Slideshow.css'
import MenuTop from '../../components/MenuTop/MenuTop'
import slideshowConfig from './slideshow.json'

const totalImages = slideshowConfig.reduce(
  (t, cont) => t + cont.images.length,
  0
)

function AnimatedImageBase({ style, animatedStyle, time, src }, ref) {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    setEntered(true)
  }, [])

  let imageStyle = style
  if (entered && animatedStyle) {
    imageStyle = { ...imageStyle, ...animatedStyle }
  }

  useImperativeHandle(ref, () => ({
    time,
    goodbye: () => {
      setEntered(false)
    }
  }))

  return <img style={imageStyle} src={src} alt="Slide" />
}

const AnimatedImage = React.forwardRef(AnimatedImageBase)

export default function Slideshow() {
  const [index, setIndex] = useState(0)

  const viewSlideShow = useMemo(() => {
    let outSlideShow = []

    let ci = 0
    let j = 0

    while (j <= index) {
      const container = slideshowConfig[ci]
      const reachIndex = index - j
      const showImages = container.images.filter((_, i) => i <= reachIndex)
      if (showImages.length > 0) {
        outSlideShow.push({ ...container, images: showImages })
      }
      j += showImages.length
      ci++
    }

    return outSlideShow
  }, [index])

  const animatingRef = useRef(false)
  function goPrev() {
    if (animatingRef.current) {
      return
    }
    const lastImage = imagesRef.current[index].current
    lastImage.goodbye()
    animatingRef.current = true

    setTimeout(() => {
      setIndex((i) => (i > 0 ? i - 1 : i))
      animatingRef.current = false
    }, lastImage.time)
  }
  function goNext() {
    setIndex((i) => (i < totalImages - 1 ? i + 1 : i))
  }

  let z = 0
  const imagesRef = useRef({})
  function imageRef(i) {
    if (!imagesRef.current[i]) {
      imagesRef.current[i] = React.createRef()
    }
    return imagesRef.current[i]
  }

  return (
    <div className="slideshow-container">
      <MenuTop />
      <div className="slideshow-content">
        {viewSlideShow.map((container, i) => (
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
