import { groupBy } from 'lodash'
import React, { useMemo } from 'react'

export default function SelectedCard({ item, relations, onSelected, onClose }) {
  const relationsByType = useMemo(() => groupBy(relations, 'Relazione'), [
    relations,
  ])
  return (
    <div>
      <h3>{item.title}</h3>
      <button onClick={onClose}>X</button>
      {Object.keys(relationsByType).map((relationName) => (
        <div key={relationName}>
          <h5>{relationName}</h5>
          <ul>
            {relationsByType[relationName].map((relation, i) => (
              <li
                key={i}
                onClick={() => {
                  if (item.type === 'attore') {
                    onSelected(relation, 'evento')
                  } else {
                    onSelected(relation, 'attore')
                  }
                }}
              >
                {item.type === 'attore' ? relation.Evento : relation.Attore}{' '}
                {relation.Anno}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
