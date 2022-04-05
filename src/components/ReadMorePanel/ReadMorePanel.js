import React from 'react'
import './ReadMorePanel.css'

export default function ReadMorePanel({ caseStudy, setReadMore }) {
  return (
    <div className="ReadMorePanel">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{caseStudy.titolo}</h1>
            <div className="mt-3">{caseStudy.description_en}</div>
            <div className="mt-5">{caseStudy.description}</div>
          </div>
          <div className="col-md-6 pl-4">
            <div
              className="img-read-more"
              style={{
                backgroundImage: `${caseStudy.backgroundImage}`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="close-read-more" onClick={() => setReadMore(false)}>
        <img src="/close-document.svg" alt="close" />
      </div>
    </div>
  )
}
