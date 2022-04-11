import React from 'react'
import CataloguePanel from './components/CataloguePanel'
import PerformancePanel from './components/PerformancePanel'
import RecompositionPanel from './components/RecompositionPanel'
import ShapePanel from './components/ShapePanel'
import TimesPanel from './components/TimesPanel'
import './PannelloInfo.css'

export default function PannelloInfo({
  type,
  className,
  setClosing,
  setPanelInfo,
  panelInfo,
  closing,
}) {
  return (
    <div
      className={`PannelloInfo ${className}`}
      onAnimationEnd={(e) => {
        if (panelInfo && closing) {
          setClosing(false)
          setPanelInfo(false)
        }
      }}
    >
      {type === 'luoghi' && <TimesPanel />}
      {type === 'catalogo' && <CataloguePanel />}
      {type === 'archivio' && <PerformancePanel />}
      {type === 'spettacoli' && <RecompositionPanel />}
      {type === 'forma' && <ShapePanel />}
    </div>
  )
}
