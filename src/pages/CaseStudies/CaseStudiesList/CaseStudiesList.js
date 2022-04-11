import React, { useMemo } from 'react'
import chunk from 'lodash/chunk'
import MenuTop from '../../../components/MenuTop'
import CardCaseStudy from './CardCaseStudy'
import './CaseStudiesList.css'

export default function CaseStudiesList({ caseStudies }) {
  const chunkedCaseStudies = useMemo(() => chunk(caseStudies, 3), [caseStudies])

  return (
    <div className="Spettacolo">
      <MenuTop fixed />
      <div className="container-fluid" style={{ paddingTop: 57 }}>
        {chunkedCaseStudies.map((chunkCaseStudies, i) => (
          <div key={i} className="row mt-3">
            {chunkCaseStudies.map((caseStudy) => (
              <div className="col-md-4" key={caseStudy.titolo}>
                <CardCaseStudy caseStudy={caseStudy} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
