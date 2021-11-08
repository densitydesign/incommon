import React, { useState } from "react"
import classnames from "classnames"
import { useHistory } from "react-router-dom"
import "./FiltersDocumentDetail.css"

export default function FiltersDocumentDetail({ document }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  const history = useHistory()

  return (
    <div className="block-left-detail position-relative">
      <div className="block-info-document">
        {document && <div className="title-document-detail">{document.titolo}</div>}
        {document && (
          <div className="description-document-detail">{document.descrizione}</div>
        )}
        {document &&
          <div className='document-creator'><strong>Creator</strong>: {document.rights}</div>
        }
      </div>
      <div className="block-filters-detail overflow-auto">
        <div className="label-filter-detail">Filter the catalogue by:</div>
        {document && (
          <>
            {document.spettacolo && (
              <div className="filter-block-document mt-3">
                <div className="filter-name-detail">performance</div>
                <div className="filter-body-detail">
                  <div
                    onClick={() =>
                      history.push(
                        `/catalogue?spettacolo=${document.spettacolo}`
                      )
                    }
                    className="circle-filter-detail pointer"
                  >
                    {document.spettacolo}
                  </div>
                </div>
              </div>
            )}
            {(document.luogo || document.citta) && (
              <div className="filter-block-document">
                <div className="filter-name-detail">place</div>
                <div className="filter-body">
                  {document.luogo && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?luogo=${document.luogo}`)
                      }
                      className="circle-filter-detail pointer"
                    >
                      {document.luogo}
                    </div>
                  )}
                  {document.citta && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?citta=${document.citta}`)
                      }
                      className="circle-filter-detail pointer"
                    >
                      {document.citta}
                    </div>
                  )}
                </div>
              </div>
            )}
            {(document.data || document.anno) && (
              <div className="filter-block-document">
                <div className="filter-name-detail">date</div>
                <div className="filter-body">
                  {document.anno && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?anno=${document.anno}`)
                      }
                      className="circle-filter-detail pointer"
                    >
                      {document.anno}
                    </div>
                  )}
                  {document.anno !== document.data && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?anno=${document.anno}`)
                      }
                      className="circle-filter-detail pointer"
                    >
                      {document.data}
                    </div>
                  )}
                </div>
              </div>
            )}
            {document.tipologia && (
              <div className="filter-block-document">
                <div className="filter-name-detail">type of document</div>
                <div className="filter-body">
                  <div
                    onClick={() =>
                      history.push(`/catalogue?tipologia=${document.tipologia}`)
                    }
                    className="circle-filter-detail pointer"
                  >
                    {document.tipologia}
                  </div>
                </div>
              </div>
            )}
            {document.content_provider && (
              <div className="filter-block-document">
                <div className="filter-name-detail">archive</div>
                <div className="filter-body">
                  <div
                    onClick={() =>
                      history.push(
                        `/catalogue?content_provider=${document.content_provider}`
                      )
                    }
                    className="circle-filter-detail pointer"
                  >
                    {document.content_provider}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
