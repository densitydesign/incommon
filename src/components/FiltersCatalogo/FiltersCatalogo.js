import React, { useMemo, useState } from 'react'
import classnames from 'classnames'
import DatePicker, { registerLocale } from 'react-datepicker'
import orderBy from 'lodash/orderBy'
import it from 'date-fns/locale/it'
import 'react-datepicker/dist/react-datepicker.css'
import './FiltersCatalogo.css'

registerLocale('it', it)

const MicroFilter = ({ name, count, onClick }) => {
  return (
    <div className="item-micro-filter d-flex">
      <div
        className="d-flex w-100 pointer justify-content-between"
        onClick={onClick}
      >
        <div>{name}</div>
        <div>{count}</div>
      </div>
    </div>
  )
}

const emptyList = []
const MicroFilters = ({ countBy, filters, name, addFilter }) => {
  const counts = countBy[name] ?? emptyList
  const values = filters[name] ?? emptyList
  const showCounts = useMemo(() => {
    return orderBy(
      counts.filter((c) => !values.includes(c.name)),
      'count',
      'desc'
    )
  }, [counts, values])

  return showCounts.map((c) => (
    <MicroFilter
      onClick={() => addFilter(name, c.name)}
      key={c.name}
      name={c.name}
      count={c.count}
    />
  ))
}

export default function FiltersCatalogo({ countBy, filters, addFilter }) {
  const [filterOpen, setFilterOpen] = useState(null)
  const [startDate, setStartDate] = useState(null)

  const toggleFilterOpen = (item) => {
    if (item === filterOpen) {
      setFilterOpen(null)
    } else {
      setFilterOpen(item)
    }
  }

  return (
    <div className="filters position-sticky">
      <div className="search-filter">Cerca</div>
      <div className="item-filter">
        <span className="pointer" onClick={() => toggleFilterOpen('tipologia')}>
          <span>
            <img
              className={classnames({
                'rotate-show-hide': filterOpen === 'tipologia',
              })}
              src={'/show-hide.svg'}
              alt="Show Hide"
            />
          </span>
          <span className="ml-3 pointer">Tipologia</span>
        </span>
        {filterOpen === 'tipologia' && (
          <div className="micro-filters">
            <MicroFilters
              countBy={countBy}
              filters={filters}
              addFilter={addFilter}
              name="tipologia"
            />
          </div>
        )}
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Evento</span>
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Spettacolo</span>
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Luogo</span>
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Città</span>
      </div>
      <div className="item-filter">
        <span className="pointer" onClick={() => toggleFilterOpen('data')}>
          <span>
            <img
              className={classnames({
                'rotate-show-hide': filterOpen === 'data',
              })}
              src={'/show-hide.svg'}
              alt="Show Hide"
            />
          </span>
          <span className="ml-3 pointer">Data</span>
        </span>
        {filterOpen === 'data' && (
          <div className="micro-filters">
            <DatePicker
              minDate={new Date(1959, 1, 1)}
              inline
              locale="it"
              popperClassName={'datepicker-filter'}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        )}
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Anno</span>
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Persona</span>
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Compagnia</span>
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Organizzazione</span>
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Rivista</span>
      </div>
      <div className="item-filter">
        <span>
          <img src={'/show-hide.svg'} alt="Show Hide" />
        </span>
        <span className="ml-3">Provenienza</span>
      </div>
    </div>
  )
}
