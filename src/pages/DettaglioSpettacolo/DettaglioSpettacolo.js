import React, { useState } from "react"
import MenuTop from "../../components/MenuTop"
import { useHistory } from 'react-router-dom'
import InfoSpettacolo from "../../components/InfoSpettacolo"
import FiltersSpettacoloDetail from "../../components/FiltersSpettacoloDetail"
import "./DettaglioSpettacolo.css"
import slideshowConfig from "../Slideshow/slideshow.json"

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
        <div className="body-spettacolo d-flex align-items-center">
          {slideshowConfig.map((image) =>
            image.images.map((img, key) => {
              return (
                <div
                  style={img.style_list}
                  key={key}
                  className='pointe'
                  onClick={() => history.push('/slideshow')}
                >
                  <img src={img.src} alt="Img" width="450" />
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
