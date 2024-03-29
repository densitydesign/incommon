import React from 'react'
import { useHistory } from 'react-router-dom'
import './FiltersDocumentDetail.css'
import mapLanguage from '../../../data/DocumentTypeDictionary.json'

export default function FiltersDocumentDetail({ document }) {
  const history = useHistory()

  return (
    <div className="block-left-detail position-relative">
      <div className="block-info-document">
        {document && (
          <div className="title-document-detail">{document.titolo}</div>
        )}
        {document && (
          <div className="description-document-detail">
            {document.descrizione}
          </div>
        )}
        {document && (
          <div className="document-creator">
            <strong>Creator</strong>: {document.creator}
          </div>
        )}
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
            {document.luogo && (
              <div className="filter-block-document">
                <div className="filter-name-detail">place</div>
                <div className="filter-body-detail">
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
                </div>
              </div>
            )}
            {(document.data) && (
              <div className="filter-block-document">
                <div className="filter-name-detail">date</div>
                <div className="filter-body-detail">
                  {document.data && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?data=${document.data}`)
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
                <div className="filter-body-detail">
                  <div
                    onClick={() =>
                      history.push(`/catalogue?tipologia=${document.tipologia.replace(' ','%20')}`)
                    }
                    className="circle-filter-detail pointer"
                  >
                    {mapLanguage[document.tipologia]}
                  </div>
                </div>
              </div>
            )}
            {document.content_provider && (
              <div className="filter-block-document">
                <div className="filter-name-detail">archive</div>
                <div className="filter-body-detail">
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
