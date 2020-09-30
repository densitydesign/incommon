import React from "react"
import "./DetailLuogo.css"

export default function DetailLuogo({ town, toggleTown }) {

  return (
    <div className="DetailLuogo">
      <div className="pointer p-4 text-right" onClick={() => toggleTown(null)}>
        <img src="/close-document.svg" alt="close" />
      </div>
      <div className='p-4'>
        <h4>{town.citta}</h4>
      </div>
      
    </div>
  )
}
