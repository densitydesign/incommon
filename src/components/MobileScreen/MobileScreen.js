import React from 'react'
import './MobileScreen.css'

export default function MobileScreen() {
  return (
    <div className="h-100 w-100">
      <div className='top-mobile'>
        <img src={'/mobile-incommon.svg'} className='img-fluid' alt='Incommon' />
      </div>
      <div className="text-mobile">
        The Incommon archive is designed for bigger screens. Resize your browser
        window or try turning your device.
      </div>
      <div className="d-flex justify-content-center">
        <img src="/turn-device.svg" alt="Turn device" />
      </div>
    </div>
  )
}
