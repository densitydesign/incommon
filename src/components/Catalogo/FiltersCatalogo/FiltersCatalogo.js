import React, { useMemo, useState } from "react"
import classnames from "classnames"
import DatePicker, { registerLocale } from "react-datepicker"
import orderBy from "lodash/orderBy"
import it from "date-fns/locale/it"
import "react-datepicker/dist/react-datepicker.css"
import "./FiltersCatalogo.css"

registerLocale("it", it)

const ItemFilter = ({
  toggleFilterOpen,
  filterOpen,
  countBy,
  name,
  filters,
  addFilter,
}) => {
  return (
    <div className="item-filter">
      <span className="pointer" onClick={() => toggleFilterOpen(name)}>
        <span>
          <img
            className={classnames({
              "rotate-show-hide": filterOpen === name,
            })}
            src={"/show-hide.svg"}
            alt="Show Hide"
          />
        </span>
        <span className="ml-3 pointer text-capitalize">{name}</span>
      </span>
      {filterOpen === name && (
        <MicroFilters
          countBy={countBy}
          filters={filters}
          addFilter={addFilter}
          name={name}
        />
      )}
    </div>
  )
}

const MicroFilter = ({ name, count, onClick, filterName }) => {
  return (
    <div className="item-micro-filter d-flex">
      <div
        className="d-flex w-100 pointer justify-content-between"
        onClick={onClick}
      >
        {name === "null" ? (
          <div>
            <i>
              <span className="text-capitalize">{filterName}</span> non
              associato
            </i>
          </div>
        ) : (
          <div className="name-micro-filter">{name}</div>
        )}
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
      "count",
      "desc"
    )
  }, [counts, values])

  return (
    <div className="micro-filters">
      {showCounts.map((c) => (
        <MicroFilter
          onClick={() => addFilter(name, c.name)}
          key={c.name}
          name={c.name}
          filterName={name}
          count={c.count}
        />
      ))}
    </div>
  )
}

export default function FiltersCatalogo({
  countBy,
  filters,
  addFilter,
  handleSearch,
  search,
}) {
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
    <div className="filters">
      <div className="search-filter">
        <input
          className="search-input"
          placeholder="Cerca"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <ItemFilter
        name="tipologia"
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
      <ItemFilter
        name="spettacolo"
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
      <ItemFilter
        name="luogo"
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
      <ItemFilter
        name="citta"
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
      <div className="item-filter">
        <span className="pointer" onClick={() => toggleFilterOpen("data")}>
          <span>
            <img
              className={classnames({
                "rotate-show-hide": filterOpen === "data",
              })}
              src={"/show-hide.svg"}
              alt="Show Hide"
            />
          </span>
          <span className="ml-3 pointer">Data</span>
        </span>
        {filterOpen === "data" && (
          <div className="micro-filters">
            <DatePicker
              minDate={new Date(1959, 1, 1)}
              inline
              locale="it"
              popperClassName={"datepicker-filter"}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        )}
      </div>
      <ItemFilter
        name="anno"
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
      <ItemFilter
        name="persona"
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
      <ItemFilter
        name="compagnia"
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
      <ItemFilter
        name="rivista"
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
    </div>
  )
}
