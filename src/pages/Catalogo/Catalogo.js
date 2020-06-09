import React, { useState } from 'react'
import MenuTop from '../../components/MenuTop'
import classnames from 'classnames'
import './Catalogo.css'

export default function Catalogo() {

  const [filterOpen, setFilterOpen] = useState(null)

  const toggleFilterOpen = (item) => {
    if(item === filterOpen){
      setFilterOpen(null)
    } else {
      setFilterOpen(item)
    }
  }

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
            <div className='filters'>
              <div className='search-filter'>
                Cerca
              </div>
              <div onClick={() => toggleFilterOpen('tipologia')} className='item-filter pointer'>
                <span><img className={classnames({
                  'rotate-show-hide': filterOpen === 'tipologia'
                })} src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Tipologia</span>
                {filterOpen === 'tipologia' &&
                  <div className='micro-filters'>
                    <div className='item-micro-filter d-flex'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div>Manoscritto</div>
                        <div>402</div>
                      </div>
                    </div>
                    <div className='item-micro-filter mt-2 d-flex'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div>Disegni</div>
                        <div>124</div>
                      </div>
                    </div>
                    <div className='item-micro-filter mt-2 d-flex'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div>Dattiloscritto</div>
                        <div>59</div>
                      </div>
                    </div>
                    <div className='item-micro-filter mt-2 d-flex'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div>Articoli di giornale</div>
                        <div>15</div>
                      </div>
                    </div>
                  </div>
                }
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Evento</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Spettacolo</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Luogo</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Città</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Data</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Anno</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Persona</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Compagnia</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Organizzazione</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Rivista</span>
              </div>
              <div className='item-filter'>
                <span><img src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span className='ml-3'>Provenienza</span>
              </div>
            </div>
          </div>
        </div>
        <div className='block-catalogo'>

        </div>
      </div>
    </div>
  )
}
