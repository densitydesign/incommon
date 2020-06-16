import React from 'react'
import { Link } from 'react-router-dom'
import MenuTop from '../../components/MenuTop'
import FiltersCatalogo from '../../components/FiltersCatalogo'
import preval from 'preval.macro'
import './Catalogo.css'

export default function Catalogo() {

  const images = preval`
    const fs = require('fs')
    const files = fs.readdirSync(__dirname+'/../../../public/catalogo')
    module.exports = files
  `

  return (
    <div className='Catalogo'>
      <MenuTop />
      <div className='d-flex'>
        <div className='block-filters'>
          <div className='d-flex'>
            <div className='raggruppa-button'>raggruppa i fascicoli</div>
            <div className='reset-filtri'>cancella i filtri</div>
          </div>
          <div style={{ height: 200 }}>

          </div>
          <div className='container'>
            <FiltersCatalogo />
          </div>
        </div>
        <div className='block-catalogo ml-4 mr-4 d-flex flex-row flex-wrap'>
          {images && images.map((image,key) => (
            <div style={{ height: 120 }} key={key} className='mr-4 mt-4 pointer'>
              <Link to={'/catalogo-dei-documenti/1'}>
                <img height={120} src={`/catalogo/${image}`} alt='Catalogo' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
