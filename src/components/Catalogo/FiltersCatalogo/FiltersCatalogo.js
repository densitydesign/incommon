import React, { useMemo, useState } from "react"
import classnames from "classnames"
import orderBy from "lodash/orderBy"
import "./FiltersCatalogo.css"

const ItemFilter = ({
  toggleFilterOpen,
  filterOpen,
  countBy,
  name,
  nameToShow = null,
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
        <span className="ml-3 pointer text-capitalize">{nameToShow ? nameToShow : name}</span>
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
        {name !== 'null' && (
          <>
            <div className="name-micro-filter">{name}</div>
            <div>{count}</div>
          </>
        )}
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
        name="content_provider"
        nameToShow={'Provenienza'}
        addFilter={addFilter}
        filters={filters}
        filterOpen={filterOpen}
        toggleFilterOpen={toggleFilterOpen}
        countBy={countBy}
      />
    </div>
  )
}
