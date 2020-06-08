import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {

  return (
    <div>
      <div className='menu-top d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <div>
            <Link to={'/'}><img src='/in-common.svg' alt='INCOMMON' /></Link>
          </div>
          <div className='d-flex'>
            <div className='item-menu-top pointer'>Sparagmos dell’archivio</div>
            <div className='item-menu-top pointer'>Ricomporre uno spettacolo</div>
            <div className='item-menu-top pointer'>La forma della comunità</div>
            <div className='item-menu-top pointer'>I tempi e i luoghi</div>
            <div className='item-menu-top pointer'>Catalogo dei documenti</div>
          </div>
        </div>
        <div className='mr-3'>
          <img src='/open-right-panel-button.svg' alt='Info Panel' />
        </div>
      </div>
    </div>
  )
}
