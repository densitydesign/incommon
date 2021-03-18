import React from "react"

export default function SearchResults({
  search,
  onTextChange,
  searchResults,
  onSelect,
}) {
  return (
    <div>
      <input
        className='input-forma'
        type="text"
        placeholder="Cerca un nodo"
        value={search}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <div>
        <ul className='list-search-items'>
          {searchResults.map((result, i) => (
            <li
              className='pointer'
              onClick={() => onSelect(result)}
              key={`${result.type}-${result.title}`}
            >
              {result.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
