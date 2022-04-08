import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MenuTop from '../../components/MenuTop'
import PannelloInfo from '../../components/PannelloInfo'

export default function Archivio() {
  const [panelInfo, setPanelInfo] = useState(false)
  const history = useHistory()
  useEffect(() => {
    function handleMessage(msg) {
      if (msg.data.docID) {
        history.push(`/catalogue/${msg.data.docID}`)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [history])
  return (
    <div className="Archivio">
      <MenuTop panelInfo={panelInfo} setPanelInfo={setPanelInfo} />
      {panelInfo && <PannelloInfo type="archivio" />}
      <iframe
        src="/_desparagmos/"
        title="sparagmons"
        className="page w-100 border-0"
      ></iframe>
    </div>
  )
}
