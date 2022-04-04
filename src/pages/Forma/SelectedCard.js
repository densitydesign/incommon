import { groupBy, uniqBy } from 'lodash'
import React, { useMemo } from 'react'
import classNames from 'classnames'

export default function SelectedCard({
  item,
  relations,
  onSelected,
  selectedNode,
}) {
  const relationsByType = useMemo(
    () => groupBy(relations, 'Relazione'),
    [relations]
  )

  console.log(relationsByType)
  return (
    <div className="position-relative">
      <h4>{item.title}</h4>
      {Object.keys(relationsByType).map((relationName) => (
        <div key={relationName} className="mt-4">
          <h5 className="relation-name">{relationName}</h5>
          <ul className="list-events-actors">
            {uniqBy(relationsByType[relationName],'Evento').map((relation, i) => (
              <li
                className={classNames(
                  'd-flex justify-content-between pointer',
                  {
                    'ligh-selected-label-graph':
                      selectedNode ===
                      (item.type === 'attore'
                        ? relation.Evento
                        : relation.Attore),
                  }
                )}
                key={i}
                onClick={() => {
                  if (item.type === 'attore') {
                    onSelected(relation, 'evento')
                  } else {
                    onSelected(relation, 'attore')
                  }
                }}
              >
                <span className="actor-event-item">
                  {item.type === 'attore' ? relation.Evento : relation.Attore}{' '}
                </span>
                <span className="year-item">{relation.Anno}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
