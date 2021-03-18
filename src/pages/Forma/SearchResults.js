import React from 'react'

export default function SearchResults({
  search,
  onTextChange,
  searchResults,
  onSelect,
}) {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <div>
        <ul>
          {searchResults.map((result, i) => (
            <li
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
