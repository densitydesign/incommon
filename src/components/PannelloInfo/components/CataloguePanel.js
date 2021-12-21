import React from "react"
import "../PannelloInfo.css"
import catalogue01 from "../assets/catalogue_01@2x.png"
import catalogue02 from "../assets/catalogue_02@2x.png"
import catalogue03 from "../assets/catalogue_03@2x.png"

export default function CataloguePanel() {
  return (
    <div>
      <p>
        <span className={"title-panel"}>Catalogue</span> displays documents in a
        grid layout that can be filtered according to different criteria. The
        catalogue maintains the traditional conception of materials as
        documents, but the filtrable grid offers the needed ‘contextual
        pressure’01 to stimulate new readings of documents as collections.
      </p>
      <p>
        {" "}
        The view exploits the grid as a format for collection: when displayed
        next to each other, documents become part of a collection, which the
        user can modify by applying various filters, prompting new visual
        sequences. Images can be visualised as single items{" "}
        <span>
          <img src={catalogue01} width={120} alt="Catalogue 01" />
        </span>{" "}
        or folded into binders{" "}
        <span>
          <img src={catalogue02} width={67} alt="Catalogue 02" />
        </span>{" "}
        when they belong to the same documents. By clicking{" "}
        <span>
          <img src={catalogue03} width={24} height={32} alt="Catalogue 02" />
        </span>{" "}
        on one item, the document card opens up, showing the associated
        metadata.
      </p>
    </div>
  )
}
