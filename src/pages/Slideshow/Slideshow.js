import React, { useState } from "react"
import "./Slideshow.css"
import { Link } from "react-router-dom"
import MenuTop from "../../components/MenuTop/MenuTop"
import slideshowConfig from "./slideshow.json"

const totalImages = slideshowConfig.reduce(
  (t, cont) => t + cont.images.length,
  0
)

function AnimatedImageBase({ style, animatedStyle, time, src, entered }) {
  let imageStyle = style
  if (entered && animatedStyle) {
    imageStyle = { ...imageStyle, ...animatedStyle }
  }

  return <img style={imageStyle} src={src} alt="Slide" />
}

const AnimatedImage = React.memo(AnimatedImageBase)

export default function Slideshow() {
  const [index, setIndex] = useState(0)

  function goPrev() {
    setIndex((index) => {
      if (index > 0) {
        return index - 1
      }
      return index
    })
  }
  function goNext() {
    setIndex((index) => {
      if (index < totalImages - 1) {
        return index + 1
      }
      return index
    })
  }

  let z = 0

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      goNext()
    } else if (e.key === "ArrowLeft") {
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
              return (
                <AnimatedImage entered={index >= z - 1} key={j} {...image} />
              )
            })}
          </div>
        ))}
        <div onClick={goPrev} className="slide-click-spy-prev" />
        <div onClick={goNext} className="slide-click-spy-next" />
        <div className="slide-index">
          {index + 1} / {totalImages}
          <Link
            className="pointer ml-3"
            to={'/recomposition/1'}
            style={{ zIndex: 2000}}
          >
            <img src="/close-document.svg" alt="Close" />
          </Link>
        </div>
      </div>
    </div>
  )
}
