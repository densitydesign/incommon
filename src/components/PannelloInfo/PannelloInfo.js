import React from "react"
import PerformancePanel from "./components/PerformancePanel"
import RecompositionPanel from "./components/RecompositionPanel"
import ShapePanel from "./components/ShapePanel"
import TimesPanel from "./components/TimesPanel"
import "./PannelloInfo.css"

export default function PannelloInfo({ type }) {
  return (
    <div className={"PannelloInfo"}>
      {type === "luoghi" && (
        <TimesPanel />
      )}
      {type === "catalogo" && (
        <div>
          <span className={"title-panel"}>Catalogue</span> displays documents in
          a grid layout that can be filtered according to different criteria.
          The catalogue maintains the traditional conception of materials as
          documents, but the filtrable grid offers the needed ‘contextual
          pressure’01 to stimulate new readings of documents as collections. The
          view exploits the grid as a format for collection: when displayed next
          to each other, documents become part of a collection, which the user
          can modify by applying various filters, prompting new visual
          sequences. Images can be visualised as single items or folded into
          binders when they belong to the same documents. By clicking on one
          item, the document card opens up, showing the associated metadata.
        </div>
      )}
      {type === "archivio" && <PerformancePanel />}
      {type === "spettacoli" && <RecompositionPanel />}
      {type === "forma" && <ShapePanel />}
    </div>
  )
}
