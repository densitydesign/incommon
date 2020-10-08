import React, { useState, useMemo } from 'react'
import MenuTop from '../../components/MenuTop'
import InfoSpettacolo from '../../components/DettaglioSpettacolo/InfoSpettacolo'
import FiltersSpettacoloDetail from '../../components/DettaglioSpettacolo/FiltersSpettacoloDetail'
import ImagesStack from '../../components/DettaglioSpettacolo/ImagesStack'
import flatMap from 'lodash/flatMap'
import { shuffle } from 'seed-shuffle'
import './DettaglioSpettacolo.css'
import slideshowConfig from '../Slideshow/slideshow.json'

// Mantain the same "random" for the entire user session
// NOTE: Place a literal Es:. 5 to have ALWAYS the same random factor
const RANDOM_SEED = 1 + Math.floor(Math.random() * 1000)

export default function DettaglioSpettacolo() {
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  const images = useMemo(() => {
    // TODO: Take images from API
    const allImages = flatMap(slideshowConfig, (docs) =>
      docs.images.map((i) => i.src)
    )
    return shuffle(allImages, RANDOM_SEED)
  }, [])

  return (
    <div className="DettaglioSpettacolo">
      <MenuTop />
      <div className="d-flex page">
        {showMoreInfo && (
          <FiltersSpettacoloDetail toggleShowMoreInfo={toggleShowMoreInfo} />
        )}
        <InfoSpettacolo toggleShowMoreInfo={toggleShowMoreInfo} />
        <div className="body-spettacolo d-flex justify-content-center align-items-center">
          <ImagesStack images={images} />
        </div>
      </div>
    </div>
  )
}
