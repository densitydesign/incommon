import React, { useState } from 'react'
import MenuTop from '../../components/MenuTop'
import InfoSpettacolo from '../../components/InfoSpettacolo'
import FiltersSpettacoloDetail from '../../components/FiltersSpettacoloDetail'
import './DettaglioSpettacolo.css'


export default function DettaglioSpettacolo(){

  const [showMoreInfo,setShowMoreInfo] = useState(false)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  return (
    <div className='DettaglioSpettacolo'>
      <MenuTop />
      <div className='d-flex'>
        {showMoreInfo &&
          <FiltersSpettacoloDetail toggleShowMoreInfo={toggleShowMoreInfo} />
        }
        <InfoSpettacolo toggleShowMoreInfo={toggleShowMoreInfo} />
        <div className='body-spettacolo'>
          xxx
        </div>
      </div>
    </div>
  )
}
