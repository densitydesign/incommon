import React, { useState } from "react"
import MenuTop from "../../components/MenuTop"
import PannelloInfo from "../../components/PannelloInfo"

export default function Archivio() {
  const [panelInfo, setPanelInfo] = useState(false)
  return (
    <div className="Archivio">
      <MenuTop panelInfo={panelInfo} setPanelInfo={setPanelInfo} />
      {panelInfo && <PannelloInfo type="archivio" />}
    </div>
  )
}
