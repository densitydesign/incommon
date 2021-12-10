import React from "react"
import "../PannelloInfo.css"
import times01 from "../assets/Times_01@2x.png"
import times02 from "../assets/Times_02@2x.png"
import times03 from "../assets/Times_03@2x.png"
import times04 from "../assets/Times_04@2x.png"

export default function TimesPanel() {
  return (
    <div>
      <p>
        <span className={"title-panel"}>Times and Places</span> shows the
        geographical and temporal extent of the community. The visualization
        displays the places affected by the Incommon community from 1959 to
        1979.
      </p>
      <p>
        Geographical places are represented with red circles{" "}
        <span>
          <img src={times01} width={30} height={30} alt="Times 01" />
        </span>{" "}
        sized according to the number of mentions in a given year. By selecting{" "}
        <span>
          <img src={times04} width={24} height={32} alt="Times 01" />
        </span>{" "}
        each circle, the trend{" "}
        <span>
          <img src={times02} width={29} height={23} alt="Times 01" />
        </span>{" "}
        for that location is shown, and specific venues and events are displayed
        in a list. By moving the slider{" "}
        <span>
          <img src={times03} width={87} height={16} alt="Times 01" />
        </span>{" "}
        on the bottom, one can change the year visualised on the map.
      </p>
    </div>
  )
}
