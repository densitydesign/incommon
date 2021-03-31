import React from 'react'

export default function ZoomControls({ onZoomIn, onZoomOut, onZoomReset }) {
  return (
    <div className='Graph-ZoomControls'>
      <div className='Zoom-Plus' onClick={() => onZoomIn()}>+</div>
      <div className='Zoom-Reset' onClick={() => onZoomReset()}>x</div>
      <div className='Zoom-Minus' onClick={() => onZoomOut()}>-</div>
    </div>
  )
}