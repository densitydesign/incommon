import { uniqBy } from "lodash"
import React from "react"
import "./FiltersSpettacoloDetail.css"

export default function FiltersSpettacoloDetail({
  toggleShowMoreInfo,
  caseStudy,
}) {
  console.log("caseStudy", caseStudy, "ciao")

  const dates = uniqBy(caseStudy.dates.filter((d) => !!d && d !== '0000-00-00'))
  const luoghi = uniqBy(caseStudy.luoghi.filter((d) => !!d))
  const citta = uniqBy(caseStudy.citta.filter((d) => !!d))
  const persone = uniqBy(caseStudy.persone.filter((d) => !!d))

  return (
    <div className="FiltersSpettacoloDetail">
      <div className="block-info-spettacolo">
        <div className="title-spettacolo-filter">{caseStudy.caption}</div>
        <div onClick={toggleShowMoreInfo} className="close-filters pointer">
          <img alt="close filters" src={"/close-right-panel-button.svg"} />
        </div>
      </div>
      <div className="block-filters-detail-spettacolo">
        {dates.length > 0 && (
          <div className="filter-block">
            <div className="filter-name">data premiere</div>
            <div className="filter-body d-flex flex-wrap">
              {dates.map((data) => (
                <div key={data} className="circle-filter mr-2">
                  {data}
                </div>
              ))}
            </div>
          </div>
        )}
        {luoghi.length > 0 && (
          <div className="filter-block">
            <div className="filter-name">luogo</div>
            <div className="filter-body  d-flex flex-wrap">
              {luoghi.map((luogo) => (
                <div key={luogo} className="circle-filter mr-2">
                  {luogo}
                </div>
              ))}
            </div>
          </div>
        )}
        {citta.length > 0 && (
          <div className="filter-block">
            <div className="filter-name">città</div>
            <div className="filter-body  d-flex flex-wrap">
              {citta.map((city) => (
                <div key={city} className="circle-filter mr-2">
                  {city}
                </div>
              ))}
            </div>
          </div>
        )}
        {persone.length > 0 && (
          <div className="filter-block">
            <div className="filter-name">persona</div>
            <div className="filter-body">
              {persone.map((persona) => (
                <div key={persona} className="circle-filter">
                  {persona}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
