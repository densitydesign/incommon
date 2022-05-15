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

  if (slug === 'theatre') {
    docID = 'GC' + docID
  }



  if (
    slug === 'theatre' &&
    (docID === 'GC153%20(4)' || docID === 'GC153%20(3)')
  ) {
    docID = 'GC0153'
  }

  if (
    slug === 'zip' &&
    (docID === 'image00111')
  ) {
    docID = 'VF0055'
  }

  if (
    slug === 'zip' &&
    (docID === 'zip%206' || docID === 'zip%206a')
  ) {
    docID = 'VF0048'
  }

  if (
    slug === 'zip' &&
    (docID === 'zip%203' || docID === 'zip%203a')
  ) {
    docID = 'VF0045'
  }

  if (
    slug === 'zip' &&
    (docID === 'zip%205' || docID === 'zip%205a')
  ) {
    docID = 'VF0047'
  }

  if (
    slug === 'zip' &&
    (docID === 'zip%204' || docID === 'zip%204a')
  ) {
    docID = 'VF0046'
  }

  if (
    slug === 'don-chisciotte' &&
    (docID === 'EP0004')
  ) {
    docID = 'PD0004'
  }


  if (
    slug === 'sir-and-lady-macbeth' &&
    (docID === '13')
  ) {
    docID = 'EP0013'
  }

  if (
    slug === 'sir-and-lady-macbeth' &&
    (docID === 'Vf0102')
  ) {
    docID = 'VF0102'
  }

  if (
    slug === 'sir-and-lady-macbeth' &&
    (docID === '14')
  ) {
    docID = 'EP0014'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'image00009')
  ) {
    docID = 'MB0086'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'Un%20nome%20cos%C3%AC%20grande')
  ) {
    docID = 'VF0068'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'le%20vallette%20locandina')
  ) {
    docID = 'VF0067'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'image00002')
  ) {
    docID = 'MB0082'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'image00031')
  ) {
    docID = 'MB0097'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'dec01-a' || docID === 'dec01-b')
  ) {
    docID = 'VF0066'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'image00007')
  ) {
    docID = 'MB0085'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'image00034')
  ) {
    docID = 'MB0099'
  }

  if (
    slug === 'decentramento' &&
    (docID === 'ts')
  ) {
    docID = 'MB0105'
  }

  if (
    slug === 'decentramento' &&
    (docID === '600')
  ) {
    docID = 'VF0064'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === 'image00052' || docID === 'image00051' || docID === 'image00050' || docID === 'image00049')
  ) {
    docID = 'VF0029'
  }


  if (
    slug === 'scontri-generali' &&
    (docID === 'SB0009%2035' || docID === 'SB0009%2018' || docID === 'SB0009%2030' || docID === 'SB0009%2050' || docID === 'SB0009%2009' || docID === 'SB0009%2004' || docID === 'SB0009%2006' || docID === 'SB0009%2007')
  ) {
    docID = 'SB0009'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === 'image00037')
  ) {
    docID = 'VF0007'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === 'image0007')
  ) {
    docID = 'VF0001'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === 'image00039')
  ) {
    docID = 'VF0008'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === 'image00027')
  ) {
    docID = 'VF0003'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === '2021')
  ) {
    docID = 'SB0006'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === '2021')
  ) {
    docID = 'SB0006'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === 'image00077')
  ) {
    docID = 'VF0023'
  }

  if (
    slug === 'scontri-generali' &&
    (docID === 'image00003')
  ) {
    docID = 'VF0032'
  }

  if(
    slug === 'cenerella' &&
    (docID === '0246' || docID === '0243' || docID === '0250' || docID === '0245' || docID === '0249' || docID === '0248' || docID === '0247'  || docID === '0244' )
  ) {
    docID = 'GC' + docID
  }

  if (
    slug === 'cenerella' &&
    (docID === 'GC0230%20(9)' || docID === 'GC0230%20(6)')
  ) {
    docID = 'GC0230'
  }

  if (
    slug === 'cenerella' &&
    (docID === 'GC0236%20intro%201')
  ) {
    docID = 'GC0236'
  }

  if(
    slug === 'sudd' &&
    (docID === '35' || docID === '40' || docID === '41' || docID === '42' || docID === '39' || docID === '38')
  ) {
    docID = 'EP00' + docID
  }

  if (
    slug === 'sudd' &&
      (docID === 'quaderno%20SUDD')
  ) {
    docID = 'EP0033'
  }

  if (
    slug === 'la-rivolta-degli-oggetti' &&
      (docID === 'GC0037%20(8)' || docID === 'GC0037%20(6)'|| docID === 'GC0037%20(7)' )
  ) {
    docID = 'GC0037'
  }

  if (
    slug === 'la-rivolta-degli-oggetti' &&
      (docID === 'GC0042%20copia' )
  ) {
    docID = 'GC0042'
  }

  if(
    slug === 'rotobolo' &&
    (docID === '0117' || docID === '0131' || docID === '0133'  || docID === '0135'  || docID === '0138' || docID === '0115' || docID === '0114' || docID === '0120' || docID === '0095'  || docID === '0100' || docID === '0118' || docID === '0124' )
  ) {
    docID = 'GC' + docID
  }

  if(
    slug === 'rotobolo' &&
    (docID === '0104%20(2)' || docID === '0104%20(3)' || docID === '0104%20(5)')
  ) {
    docID = 'GC0104'
  }

  if(
    slug === 'rotobolo' &&
    (docID === '110')
  ) {
    docID = 'GC0110'
  }

  if(
    slug === 'rotobolo' &&
    (docID === 'GC0187%20(1)' || docID === 'GC0187%20(2)' || docID === 'GC0187%20(3)' || docID === 'GC0187%20(4)')
  ) {
    docID = 'GC0187'
  }

    if(
      slug === 'luci-della-citta' &&
      (docID === '6%20(6)')
    ) {
      docID = 'MG0116'
    }

    if(
      slug === 'luci-della-citta' &&
      (docID === '2%20(6)')
    ) {
      docID = 'MG0144'
    }

    if(
      slug === 'luci-della-citta' &&
      (docID === 'striscia%201%20(4)')
    ) {
      docID = 'MG0159'
    }

    if(
      slug === 'luci-della-citta' &&
      (docID === '3%20(5)')
    ) {
      docID = 'MG0145'
    }

    if(
      slug === 'luci-della-citta' &&
      (docID === '0082%20(1)' || docID === '0082%20(2)' || docID === '0082%20(3)' || docID === '0082%20(4)' || docID === '0082%20(5)' || docID === '0082%20(6)')
    ) {
      docID = 'GC0082'
    }

    if(
      slug === 'luci-della-citta' &&
      (docID === '5%20(1)')
    ) {
      docID = 'MG0149'
    }

    if(
      slug === 'luci-della-citta' &&
      (docID === '4%20(2)')
    ) {
      docID = 'MG0146'
    }

    if(
      slug === 'luci-della-citta' &&
      (docID === '4%20(4)')
    ) {
      docID = 'MG0147'
    }

    if(
      slug === 'assoli' &&
      (docID === '0057')
    ) {
      docID = 'EP0057'
    }

    if(
      slug === 'mors' &&
      (docID === 'MB0063-01' || docID === 'MB0063-02' || docID === 'MB0063-03' || docID === 'MB0063-04' || docID === 'MB0063-15' || docID === 'MB0063-16' || docID === 'MB0063-24' || docID === 'MB0063-25')
    ) {
      docID = 'MB0063'
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
