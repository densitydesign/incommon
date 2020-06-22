import React from 'react'
import MenuTop from '../../components/MenuTop'
import InfoSpettacolo from '../../components/InfoSpettacolo'
import './DettaglioSpettacolo.css'


export default function DettaglioSpettacolo(){
  return (
    <div className='DettaglioSpettacolo'>
      <MenuTop />
      <div className='d-flex'>
        <InfoSpettacolo />
        <div className='body-spettacolo'>
          xxx
        </div>
      </div>
    </div>
  )
}
