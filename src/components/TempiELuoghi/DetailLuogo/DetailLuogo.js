import { groupBy } from "lodash"
import React from "react"
import "./DetailLuogo.css"

export default function DetailLuogo({ town, toggleTown, spettacoli }) {
  const spettacoliGrouped = groupBy(spettacoli, "luogo")

  console.log(spettacoliGrouped)

  return (
    <div className="DetailLuogo">
      <div className="pointer p-4 text-right" onClick={() => toggleTown(null)}>
        <img src="/close-document.svg" alt="close" />
      </div>
      <div className="p-4">
        <h4>{town}</h4>
      </div>
      <div className='pl-4 pr-4'>
        {Object.keys(spettacoliGrouped).map((place, index) => 
          spettacoliGrouped[place].map((spettacolo) => (
            <div key={place} className='mt-3'>
              {index === 0 && <u>{place}</u>}
              <div className="mt-2">{spettacolo.titolo}</div>
              {spettacolo.data && (
                <div className='mt-1'>
                  <i>{spettacolo.data}</i>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
