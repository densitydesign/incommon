import React, { useState } from "react"
import MenuTop from "../../components/MenuTop"
import { useHistory } from 'react-router-dom'
import InfoSpettacolo from "../../components/InfoSpettacolo"
import FiltersSpettacoloDetail from "../../components/FiltersSpettacoloDetail"
import ImagesStack from '../../components/ImagesStack'
import "./DettaglioSpettacolo.css"
import slideshowConfig from "../Slideshow/slideshow.json"

const NUMBER_OF_IMAGES_PER_CATEGORY = 5

// Mantain the same "random" for the entire user session
// NOTE: Place a literal Es:. 5 to have ALWAYS the same random factor
const RANDOM_SEED = 1 + Math.floor(Math.random() * 1000)

export default function DettaglioSpettacolo() {
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  const history = useHistory()

  return (
    <div className="DettaglioSpettacolo">
      <MenuTop />
      <div className="d-flex">
        {showMoreInfo && (
          <FiltersSpettacoloDetail toggleShowMoreInfo={toggleShowMoreInfo} />
        )}
        <InfoSpettacolo toggleShowMoreInfo={toggleShowMoreInfo} />
        <div className="body-spettacolo d-flex justify-content-center align-items-center">
          <ImagesStack
            docs={slideshowConfig}
          />
        </div>
      </div>
    </div>
  )
}
