import React from "react"
import PerformancePanel from "./components/PerformancePanel"
import RecompositionPanel from "./components/RecompositionPanel"
import ShapePanel from "./components/ShapePanel"
import "./PannelloInfo.css"

export default function PannelloInfo({ type }) {
  return (
    <div className={"PannelloInfo"}>
      {type === "luoghi" && (
        <div>
          <span className={"title-panel"}>Times and Places</span> shows the
          geographical and temporal extent of the community. The visualization
          displays the places affected by the Incommon community from 1959 to
          1979. Geographical places are represented with red circles sized
          according to the number of mentions in a given year. By selecting each
          circle, the trend for that location is shown, and specific venues and
          events are displayed in a list. By moving the slider on the bottom,
          one can change the year visualised on the map.
        </div>
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
      {type === "archivio" && (
        <PerformancePanel />
      )}
      {type === "spettacoli" && (
        <RecompositionPanel />
      )}
      {type === "forma" && (
        <ShapePanel />
      )}
    </div>
  )
}
