import React from "react"
import performance01 from "../assets/Performance_01@2x.png"
import performance02 from "../assets/Performance_02@2x.png"
import performance03 from "../assets/Performance_03@2x.png"
import "../PannelloInfo.css"

export default function PerformancePanel() {
  return (
    <div>
      <p>
        <span className={"title-panel"}>Performance Remains</span> exploits the
        metaphor of the table arrangement arraying documents by visual
        similarity, measured through computational techniques and visualized
        trough dimensionality reduction algorithms<sup>01</sup>. This view
        traces paths that jump from one performance to another and builds
        connections between documents scattered across time and space. The focus
        is not on the individual documents but on their programmed affinities
        <sup>02</sup>, their shared features, and the paths connecting and
        reuniting the elements in the zoomable plot.
      </p>{" "}
      <p>
        {" "}
        Users can move around{" "}
        <span>
          <img
            src={performance03}
            width={28}
            height={31}
            alt="Performance 01"
          />
        </span>{" "}
        to explore clusters of similar elements and zoom in to inspect
        individual documents{" "}
        <span>
          <img
            src={performance01}
            width={26}
            height={44}
            alt="Performance 02"
          />
        </span>{" "}
        . Selecting filters on the right, the user can visualize documents from
        one or more specific archives. In addition, a set of qualitative
        annotations{" "}
        <span>
          <img
            src={performance02}
            width={30}
            height={28}
            alt="Performance 03"
          />
        </span>{" "}
        can be displayed, helping to navigate the arrangement of documents.
      </p>
      <div className={"info-bottom"}>
        <p className={"info-red-bottom"}>
          01 — Van der Maaten, L., & Hinton, G. (2008). Visualizing
          High-Dimensional Data Using t-SNE. Journal of Machine Learning
          Research, 86(9), 2579–2605.{" "}
        </p>
        <p className={"info-red-bottom"}>
          02 — Kamin, D. (2017). Mid-Century Visions, Programmed Affinities: The
          Enduring Challenges of Image Classification. Journal of Visual
          Culture, 16(3), 310–336. https://doi.org/10.1177/1470412917739739
        </p>
      </div>
    </div>
  )
}
