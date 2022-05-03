import React, { useMemo, useState } from 'react'
import './Slideshow.css'
import { Link, useParams } from 'react-router-dom'
import MenuTop from '../../components/MenuTop/MenuTop'
import allSlideShows from './allSlideshows'
import PannelloInfo from '../../components/PannelloInfo'

function AnimatedImageBase({ style, animatedStyle, time, src, entered }) {
  let imageStyle = style
  if (entered && animatedStyle) {
    imageStyle = { ...imageStyle, ...animatedStyle }
  }

  return <img style={imageStyle} src={src} alt="Slide" />
}

const VIRTUAL_SLOT_BEFORE = 10
const VIRTUAL_SLOT_AFTER = 5

const AnimatedImage = React.memo(AnimatedImageBase)

function RunSlideshow({ slideshowConfig, slug }) {
  const flatImages = useMemo(() => {
    return slideshowConfig.reduce((flat, cont) => flat.concat(cont.images), [])
  }, [slideshowConfig])
  const totalImages = flatImages.length
  const [index, setIndex] = useState(0)
  const [panelInfo, setPanelInfo] = useState(false)

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
      if (index === totalImages - 1) {
        return 0
      }
      return index
    })
  }

  let z = 0

  function handleKeyDown(e) {
    if (e.key === 'ArrowRight') {
      goNext()
    } else if (e.key === 'ArrowLeft') {
      goPrev()
    }
  }
  const image = flatImages[index]
  let docID =
    image.src.indexOf('https://archivio.in-common.org') === 0
      ? image.src.split('/').splice(-1)[0].split('.')[0]
      : null

  if (docID.indexOf('_') > -1) {
    docID = docID.split('_')[0]
  }

  return (
    <div className="slideshow-container" onKeyDown={handleKeyDown} tabIndex={0}>
      <MenuTop panelInfo={panelInfo} setPanelInfo={setPanelInfo} />
      <div className="slideshow-content">
        {slideshowConfig.map((container, i) => (
          <div key={i} style={container.style}>
            {container.images.map((image, j) => {
              const show =
                z >= index - VIRTUAL_SLOT_BEFORE &&
                z <= index + VIRTUAL_SLOT_AFTER
              z++
              if (show) {
                return (
                  <AnimatedImage entered={index >= z - 1} key={j} {...image} />
                )
              }
              return null
            })}
          </div>
        ))}
        <div onClick={goPrev} className="slide-click-spy-prev" />
        <div onClick={goNext} className="slide-click-spy-next" />
        <div className="slide-index">
          <Link
            className="no-link text-white open-document-file mr-4"
            to={`/catalogue/${docID}`}
          >
            <div>open document file</div>
          </Link>
          {index + 1} / {totalImages}
          <Link className="pointer ml-3" to={`/recomposition/${slug}`}>
            <img src="/close-document.svg" alt="Close" />
          </Link>
        </div>
      </div>
      {panelInfo && <PannelloInfo type="spettacoli" />}
    </div>
  )
}

export default function Slideshow() {
  const { slug } = useParams()
  const slideshowConfig = allSlideShows[slug]

  if (!slideshowConfig) {
    return null
  }

  return (
    <RunSlideshow key={slug} slug={slug} slideshowConfig={slideshowConfig} />
  )
}
