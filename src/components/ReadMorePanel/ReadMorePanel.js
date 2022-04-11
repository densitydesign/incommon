import React, { useMemo } from 'react'
import './ReadMorePanel.css'

export default function ReadMorePanel({
  caseStudy,
  setReadMore,
  readMore,
  closing,
  setClosing,
}) {
  const closeClass = useMemo(() => {
    if (closing) {
      return 'closing'
    }
  }, [closing])
  return (
    <div className={`ReadMorePanel ${closeClass}`} onAnimationEnd={() => {
      if(readMore && closing){
        setClosing(false)
        setReadMore(false)
      }
    }}>
      <div className="d-flex">
        <div style={{ width: '50%', paddingTop: 62, paddingBottom: 62 }}>
          <h1 style={{ paddingLeft: 110, paddingRight: 40 }}>
            {caseStudy.titolo}
          </h1>
          <div className="mt-3 d-flex" style={{ paddingLeft: 20 }}>
            <div>EN</div>
            <div style={{ marginLeft: 57, marginRight: 57 }}>
              {caseStudy.description_en}
            </div>
          </div>
          <div className="mt-5 d-flex" style={{ paddingLeft: 20 }}>
            <div>IT</div>
            <div style={{ marginLeft: 57, marginRight: 57 }}>
              {caseStudy.description}
            </div>
          </div>
        </div>
        <div
          className="background-image-read-more"
          style={{
            backgroundImage: `${caseStudy.backgroundImage}`,
          }}
        >
          {/* <div className="img-read-more"></div> */}
        </div>
      </div>
      <div
        className="close-read-more"
        onClick={() => {
          setClosing(true)
        }}
      >
        <img src="/close-document.svg" alt="close" />
      </div>
    </div>
  )
}
