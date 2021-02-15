import { groupBy } from "lodash"
import React from "react"
import "./DetailLuogo.css"

export default function DetailLuogo({
  town,
  toggleTown,
  spettacoli,
  networkYear,
  showBackground,
}) {
  const networkSpettacoli = networkYear.map((spet) => ({
    titolo: spet.evento,
    ...spet,
  }))
  const spet = showBackground
    ? spettacoli.concat(networkSpettacoli)
    : spettacoli
  const spettacoliGrouped = groupBy(spet, "luogo")
  console.log(spettacoliGrouped, "spettacoliGrouped")

  return (
    <div className="DetailLuogo">
      <div className="pointer p-4 text-right" onClick={() => toggleTown(null)}>
        <img src="/close-document.svg" alt="close" />
      </div>
      <div className="p-4">
        <h4>{town}</h4>
      </div>
      <div className="pl-4 pr-4">
        {Object.keys(spettacoliGrouped).map((place, index) => {
          return (
            <div className="mt-4" key={index}>
              <div><u>{place}</u></div>
              {spettacoliGrouped[place].map((spettacolo) => (
                <div key={spettacolo.titolo}>
                  <div className="mt-1">{spettacolo.titolo}</div>
                  {spettacolo.data && (
                    <div className="mt-1">
                      <i>{spettacolo.data}</i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
