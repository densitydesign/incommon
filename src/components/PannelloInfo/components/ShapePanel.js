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
        <span className={"title-panel"}>The shape of community</span> visualizes
        the network of relations emerging from the archive. It shows the
        background network of people and events of the Incommon community from
        1959 to 1979.
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
        The relationships that link people and events are of different types:
        acting, directing, writing, sets and costumes, music. The network can be
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
