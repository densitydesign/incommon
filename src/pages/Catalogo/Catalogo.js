import React, { useState } from 'react'
import MenuTop from '../../components/MenuTop'
import DatePicker, { registerLocale } from "react-datepicker"
import it from 'date-fns/locale/it';
import "react-datepicker/dist/react-datepicker.css"
import classnames from 'classnames'
import preval from 'preval.macro'
import './Catalogo.css'

registerLocale('it', it)

const MicroFilter = ({ name, count }) => {
  return (
    <div className='item-micro-filter d-flex'>
      <div className='d-flex w-100 justify-content-between'>
        <div>{name}</div>
        <div>{count}</div>
      </div>
    </div>
  )
}

export default function Catalogo() {

  const [filterOpen, setFilterOpen] = useState(null)
  const [startDate, setStartDate] = useState(null);

  const toggleFilterOpen = (item) => {
    if(item === filterOpen){
      setFilterOpen(null)
    } else {
      setFilterOpen(item)
    }
  }

  // const images = [
  //   '/catalogo/1_Atto costitutivo compagnia Leo e Perla (trascinato) 1.png',
  //   '/catalogo/1_Atto costitutivo compagnia Leo e Perla (trascinato) 2.png',
  //   '/catalogo/1_Atto costitutivo compagnia Leo e Perla (trascinato) 3.png',
  //   '/catalogo/1_Atto costitutivo compagnia Leo e Perla (trascinato) 4.png',
  //   '/catalogo/12.png',
  //   '/catalogo/13.png',
  //   '/catalogo/14.png',
  //   '/catalogo/16_Archivio U.C. - 1968-Stabile-Bene Don Chisciotte.png',
  //   '/catalogo/17_donchisciotte.png',
  //   '/catalogo/18_Claudio Abate. Carmelo Bene (Don Chisciotte) in Don Chisciotte _ Teatro Carmelo Bene, Roma 1968.png',
  //   '/catalogo/19_Progr_Stabile_parteI_1-1.png'
  // ]

  const images = preval`
    const fs = require('fs')
    const files = fs.readdirSync(__dirname+'/../../../public/catalogo')
    module.exports = files
  `

  //console.log(images)

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
              <div className='item-filter'>
                <span><img className={classnames({
                  'rotate-show-hide': filterOpen === 'tipologia'
                })} src={'/show-hide.svg'} alt='Show Hide' /></span>
                <span onClick={() => toggleFilterOpen('tipologia')}  className='ml-3 pointer'>Tipologia</span>
                {filterOpen === 'tipologia' &&
                  <div className='micro-filters'>
                    <MicroFilter
                      name='Manoscritto'
                      count={402}
                    />
                    <MicroFilter
                      name='Articoli di giornale'
                      count={350}
                    />
                    <MicroFilter
                      name='Disegni'
                      count={124}
                    />
                    <MicroFilter
                      name='Dattiloscritto'
                      count={59}
                    />
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
                <span className='ml-3 pointer' onClick={() => toggleFilterOpen('data')}>Data</span>
                {filterOpen === 'data' &&
                <div className='micro-filters'>
                  <DatePicker minDate={new Date(1959,1,1)} inline locale="it" popperClassName={'datepicker-filter'} selected={startDate} onChange={date => setStartDate(date)} />
                </div>
                }
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
        <div className='block-catalogo ml-4 mr-4 d-flex flex-row flex-wrap'>
          {images.map((image,key) => (
            <div style={{ height: 120 }} key={key} className='mr-4 mt-4'><img height={120} src={`/catalogo/${image}`} alt='Catalogo' /></div>
          ))}
        </div>
      </div>
    </div>
  )
}
