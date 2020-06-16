import React, { useState } from 'react'
import MenuTop from '../../components/MenuTop'
import FiltersDocumentDetail from '../../components/FiltersDocumentDetail'
import './DettaglioDocumento.css'

export default function DettaglioDocumento() {

  const [isZoomed, setIsZoomed] = useState(false)


  return (
    <div className='DettaglioDocumento'>
      <MenuTop />
      <div className='d-flex'>
        <FiltersDocumentDetail />
        <div className='body-document'>
          <div className='header-images d-flex justify-content-between'>
            <div className='zoom-buttons d-flex align-items-center'>
              <div className='pointer' onClick={() => setIsZoomed(false)}><img src={'/zoom-out.svg'} alt='Zoom out' /></div>
              <div className='ml-3 pointer' onClick={() => setIsZoomed(false)}>reset</div>
              <div className='ml-3 pointer' onClick={() => setIsZoomed(true)}>
                <img src={'/zoom-in.svg'} alt='Zoom in' />
              </div>
            </div>
          </div>
          <div className='img-document text-center mt-4 mb-4 overflow-scroll'>
            <img className='pointer' onClick={() => setIsZoomed(true)} src={"/catalogo/SB0004-05.png"} width={'auto'} style={{ border: 0}} height={isZoomed ? 1000 : 500} alt='Catalogo'/>
          </div>
        </div>
      </div>
    </div>
  )
}
