import React, { useState } from 'react'
import classnames from 'classnames'
import DatePicker, { registerLocale } from "react-datepicker"
import it from 'date-fns/locale/it';
import "react-datepicker/dist/react-datepicker.css"
import './FiltersCatalogo.css'

registerLocale('it', it)

const MicroFilter = ({ name, count }) => {
  return (
    <div className='item-micro-filter d-flex'>
      <div className='d-flex w-100 pointer justify-content-between'>
        <div>{name}</div>
        <div>{count}</div>
      </div>
    </div>
  )
}

export default function FiltersCatalogo(){

  const [filterOpen, setFilterOpen] = useState(null)
  const [startDate, setStartDate] = useState(null);

  const toggleFilterOpen = (item) => {
    if(item === filterOpen){
      setFilterOpen(null)
    } else {
      setFilterOpen(item)
    }
  }

  return (
    <div className='filters position-sticky'>
      <div className='search-filter'>
        Cerca
      </div>
      <div className='item-filter'>
        <span className='pointer' onClick={() => toggleFilterOpen('tipologia')}>
          <span>
            <img className={classnames({
            'rotate-show-hide': filterOpen === 'tipologia'
            })} src={'/show-hide.svg'} alt='Show Hide' />
          </span>
          <span className='ml-3 pointer'>Tipologia</span>
        </span>
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
        <span className='pointer' onClick={() => toggleFilterOpen('data')}>
          <span>
            <img className={classnames({
            'rotate-show-hide': filterOpen === 'data'
            })} src={'/show-hide.svg'} alt='Show Hide' />
          </span>
          <span className='ml-3 pointer'>Data</span>
        </span>
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
  )
}
