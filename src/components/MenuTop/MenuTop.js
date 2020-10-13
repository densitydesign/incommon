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
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/performance-remains'
          >Performance Remains</NavLink>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/recomposition'
          >Recomposition</NavLink>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/the-shape-of-community'
          >The Shape of Community</NavLink>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/times-and-places'
          >Times and Places</NavLink>
          <NavLink
            activeClassName='item-menu-top-active'
            className='item-menu-top'
            to='/catalogue'
          >Catalogue</NavLink>
        </div>
      </div>
      <div className='mr-3'>
        <img src='/open-right-panel-button.svg' alt='Info Panel' />
      </div>
    </div>
  )
}
