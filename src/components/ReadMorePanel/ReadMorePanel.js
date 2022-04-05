import React from 'react'
import './ReadMorePanel.css'

export default function ReadMorePanel({ caseStudy, setReadMore }) {
  return (
    <div className="ReadMorePanel">
      <div className="d-flex">
        <div style={{ width: '50%', paddingTop: 62, paddingBottom: 62 }}>
          <h1 style={{ paddingLeft: 110 }}>{caseStudy.titolo}</h1>
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
          className='background-image-read-more'
          style={{
            backgroundImage: `${caseStudy.backgroundImage}`,
          }}
        >
          {/* <div className="img-read-more"></div> */}
        </div>
      </div>
      <div className="close-read-more" onClick={() => setReadMore(false)}>
        <img src="/close-document.svg" alt="close" />
      </div>
    </div>
  )
}
