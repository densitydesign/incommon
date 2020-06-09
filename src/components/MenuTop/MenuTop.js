import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './MenuTop.css'

export default function MenuTop(){
  return (
    <div className='menu-top d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center'>
        <div>
          <Link to={'/'}><img src='/in-common.svg' alt='INCOMMON' height='57' /></Link>
        </div>
        <div>
          <NavLink className='item-menu-top' to='/archivio'>Sparagmos dell’archivio</NavLink>
          <NavLink className='item-menu-top' to='/spettacolo'>Ricomporre uno spettacolo</NavLink>
          <NavLink className='item-menu-top' to='/forma'>La forma della comunità</NavLink>
          <NavLink className='item-menu-top' to='/luoghi'>I tempi e i luoghi</NavLink>
          <NavLink activeClassName='item-menu-top-active' className='item-menu-top' to='/catalogo'>Catalogo dei documenti</NavLink>
        </div>
      </div>
      <div className='mr-3'>
        <img src='/open-right-panel-button.svg' alt='Info Panel' />
      </div>
    </div>
  )
}
