import React from 'react'
import { Link } from 'react-router-dom'

export default function CardCaseStudy({ caseStudy }) {
  return (
    <Link className="link-spettacolo" to={`/recomposition/${caseStudy.slug}`}>
      <div
        className="item-spettacolo"
        style={{ backgroundImage: caseStudy.backgroundImage }}
      >
        <div className="info-documento d-flex justify-content-between">
          <div className="num_documenti">{caseStudy.images.length} doc.</div>
          <div className="data_documenti">{caseStudy.year}</div>
        </div>
        <div className="titolo-spettacolo">{caseStudy.caption}</div>
      </div>
    </Link>
  )
}
