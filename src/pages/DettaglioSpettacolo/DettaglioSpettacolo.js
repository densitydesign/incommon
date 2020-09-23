import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuTop from '../../components/MenuTop'
import InfoSpettacolo from '../../components/InfoSpettacolo'
import FiltersSpettacoloDetail from '../../components/FiltersSpettacoloDetail'
import './DettaglioSpettacolo.css'
import slideshowConfig from '../Slideshow/slideshow.json'


export default function DettaglioSpettacolo(){

  const [showMoreInfo,setShowMoreInfo] = useState(false)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  console.log({ tranform: 'rotate('+Math.floor(Math.random() * 10)+')'})

  return (
    <div className='DettaglioSpettacolo'>
      <MenuTop />
      <div className='d-flex'>
        {showMoreInfo &&
          <FiltersSpettacoloDetail toggleShowMoreInfo={toggleShowMoreInfo} />
        }
        <InfoSpettacolo toggleShowMoreInfo={toggleShowMoreInfo} />
        <div className='body-spettacolo d-flex align-items-center'>
          {slideshowConfig.map(image => (
            image.images.map((img, key) => {
              const degRotation = Math.floor(Math.random() * 30) + 1
              const translate = Math.floor(Math.random() * 6) + 1
              return (
              <div style={{ position: 'absolute', left: '40%', top: '15%', transform:'rotate('+degRotation+'deg)'}} key={key}>
                <img src={img.src} alt='Img' width='450' />
              </div>
            )})
          ))}
        </div>
      </div>
    </div>
  )
}
