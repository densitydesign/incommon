import React from "react"
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
        <div>
          <span className={"title-panel"}>Performance Remains</span> exploits
          the metaphor of the table arrangement arraying documents by visual
          similarity, measured through computational techniques and visualized
          trough dimensionality reduction algorithms01. This view traces paths
          that jump from one performance to another and builds connections
          between documents scattered across time and space. The focus is not on
          the individual documents but on their programmed affinities02, their
          shared features, and the paths connecting and reuniting the elements
          in the zoomable plot. Users can move around to explore clusters of
          similar elements and zoom in to inspect individual documents .
          Selecting filters on the right, the user can visualize documents from
          one or more specific archives. In addition, a set of qualitative
          annotations can be displayed, helping to navigate the arrangement of
          documents.
        </div>
      )}
      {type === "spettacoli" && (
        <div>
          <span className={"title-panel"}>Recomposition</span> focuses on a
          selection of individual case studies selected by the research team.
          Treating documents as raw footage, this section plays on the layering
          of materials as a generative technique. Each case study displays the
          related documents in two ways. First, documents can be grouped in
          small stacks by type of material or archive. Second, by selecting each
          stack, an interactive slideshow opens up. Slideshows regenerate
          performance materials by layering them on top of each other, some in
          their original size , others enlarged and cropped , others rotated .
          The documents are not treated as such but rather as raw footage: the
          focus shifts to the grains , the materials , and the textures standing
          out from the layering. The resulting composites are ‘speculative
          visual propositions’ 01, generating new visions of the performance.
        </div>
      )}
      {type === "forma" && (
        <div>
          <span className={"title-panel"}>The shape of community</span>{" "}
          visualizes the network of relations emerging from the archive. It
          shows the background network of people and events of the Incommon
          community from 1959 to 1979. In the network people are represented
          with red filled circles and events with black filled circles. Each
          circle is sized according to the number of mentions in the dataset.
          The network layout is based on force-directed graph drawing
          algorithm01, meaning that the nodes’ position is calculated so to
          there are as few crossing edges as possible. The relationships that
          link people and events are of different types: acting, directing,
          writing, sets and costumes, music. The network can be filtered
          according to these criteria, displaying only a portion of the
          community. A search bar allows the user to search for specific names,
          and visualizes their connections, offering a fluid and frictionless
          navigation through the community.
        </div>
      )}
    </div>
  )
}
