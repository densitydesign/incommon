import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './MenuTop.css'

export default function MenuTop(){
  return (
    <div className='menu-top d-flex justify-content-between align-items-center position-fixed'>
      <div className='d-flex align-items-center'>
        <div>
          <Link to={'/'}><img src='/in-common.svg' alt='INCOMMON' height='57' /></Link>
        </div>
        <div>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/sparagmos-archivio'
          >Sparagmos dell’archivio</NavLink>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/ricomporre-uno-spettacolo'
          >Ricomporre uno spettacolo</NavLink>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/la-forma-della-comunita'
          >La forma della comunità</NavLink>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/tempi-e-luoghi'
          >I tempi e i luoghi</NavLink>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/catalogo-dei-documenti'
          >Catalogo dei documenti</NavLink>
        </div>
      </div>
      <div className='mr-3'>
        <img src='/open-right-panel-button.svg' alt='Info Panel' />
      </div>
    </div>
  )
}
