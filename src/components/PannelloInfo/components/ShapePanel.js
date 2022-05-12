import React from "react"
import "../PannelloInfo.css"
import shape01 from "../assets/Shape_01@2x.png"
import shape03 from "../assets/Shape_02@2x.png"
import shape04 from "../assets/Shape_03@2x.png"
import shape02 from "../assets/Shape_04@2x.png"

export default function ShapePanel() {
  return (
    <div>
      <p>
        <span className={"title-panel"}>The shape of community</span> is composed of two specific sub-networks: the historiographic network  and the Incommon network. The data used to build the historiographic network were taken from all the available bibliographic sources presenting a list of performances representative of Italian Avant-garde Theatre. The Incommon network focuses instead on the case studies chosen by the project and is built using both bibliographic sources and data from the collected archival documents. The aim is to highlight how different practices of documentation and historicization produce distinct results in building the shape of a theatre scene.
      </p>{" "}
      <p>
        In the network people are represented with red filled{" "}
        <span>
          <img src={shape01} width={30} height={30} alt="Shape 01" />
        </span>{" "}
        circles and events with black filled{" "}
        <span>
          <img src={shape02} width={30} height={30} alt="Shape 02" />
        </span>{" "}
        circles. Each circle is sized{" "}
        <span>
          <img src={shape03} width={100} alt="Shape 03" />
        </span>{" "}
        according to the number of mentions in the dataset. The network layout
        is based on force-directed graph drawing algorithm01, meaning that the
        nodes’ position is calculated so to there are as few crossing edges as
        possible.
      </p>
      <p>
        {" "}
        The relationships that link people and events are of different types such as
        acting, directing, writing, and music. The network can be
        filtered according to these criteria, displaying only a portion of the
        community. A search bar{" "}
        <span>
          <img src={shape04} width={25} alt="Shape 03" />
        </span>{" "}
        allows the user to search for specific names, and visualizes their
        connections, offering a fluid and frictionless navigation through the
        community.
      </p>
    </div>
  )
}
