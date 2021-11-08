import React from "react"
import "./PannelloInfo.css"

export default function PannelloInfo() {
  return (
    <div className={"PannelloInfo"}>
      <div>
        <span className={'title-panel'}>Times and Places</span> shows the geographical and temporal extent of the
        community. The visualization displays the places affected by the
        Incommon community from 1959 to 1979. Geographical places are
        represented with red circles sized according to the number of mentions
        in a given year. By selecting each circle, the trend for that location
        is shown, and specific venues and events are displayed in a list. By
        moving the slider on the bottom, one can change the year visualised on
        the map.
      </div>
    </div>
  )
}
