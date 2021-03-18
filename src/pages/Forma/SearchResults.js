import React from "react"
import { Search } from "react-bootstrap-icons"

export default function SearchResults({
  search,
  onTextChange,
  searchResults,
  onSelect,
}) {
  return (
    <div>
      <div className="d-flex align-items-center">
        <Search width={20} />
        <input
          className="input-forma ml-2"
          type="text"
          placeholder="Cerca un nodo"
          value={search}
          onChange={(e) => onTextChange(e.target.value)}
        />
      </div>
      <div className="ml-4 w-100">
        <div>
          <ul className="list-search-items">
            {searchResults.map((result, i) => (
              <li
                className="pointer"
                onClick={() => onSelect(result)}
                key={`${result.type}-${result.title}`}
              >
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
