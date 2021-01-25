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
        {document && <div className="title-document">{document.titolo}</div>}
        {document && (
          <div className="description-document">{document.descrizione}</div>
        )}
        <div className="info-box">
          <div onClick={() => toggleShowMoreInfo(true)} className="pointer">
            informazioni supplementari
            <span>
              <img
                className={classnames("ml-2", {
                  "rotate-show-hide": showMoreInfo,
                })}
                src={"/hide-show-black.svg"}
                alt="Show Hide"
              />
            </span>
          </div>
          {showMoreInfo && (
            <div className="mt-4">
              {document && (
                <div className="row">
                  <span className="col-md-3">id</span>
                  <span className="col-md-9 text-red">{document.id}</span>
                </div>
              )}
              {document.rights && (
                <div className="row mt-2">
                  <span className="col-md-3">diritti</span>
                  <span className="col-md-9 text-red">{document.rights}</span>
                </div>
              )}
              {document.rights && document.content_provider && (
                <div className="mt-2">
                  <div>informazioni sui diritti dei documenti</div>
                  <div className="text-red">
                    {document.content_provider} - {document.rights}
                  </div>
                </div>
              )}
              {/* {document.persona && (
                <div className="mt-2">
                  <span>referente</span>
                  <span className="ml-5 text-red"></span>
                </div>
              )} */}
              {/* <div className="mt-3">
                informazioni sui diritti del documento
                <div className="text-red mt-1">
                  Archivio Privato Giuliano Scabia, Firenze - Giuliano Scabia
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
      <div className="block-filters-detail overflow-auto">
        <div className="label-filter">Filtra il catalogo per:</div>
        {document && (
          <>
            {document.spettacolo && (
              <div className="filter-block-document mt-3">
                <div className="filter-name">spettacolo</div>
                <div className="filter-body">
                  <div
                    onClick={() =>
                      history.push(
                        `/catalogue?spettacolo=${document.spettacolo}`
                      )
                    }
                    className="circle-filter pointer"
                  >
                    {document.spettacolo}
                  </div>
                </div>
              </div>
            )}
            {(document.luogo || document.citta) && (
              <div className="filter-block-document">
                <div className="filter-name">luogo</div>
                <div className="filter-body">
                  {document.luogo && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?luogo=${document.luogo}`)
                      }
                      className="circle-filter pointer"
                    >
                      {document.luogo}
                    </div>
                  )}
                  {document.citta && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?citta=${document.citta}`)
                      }
                      className="circle-filter pointer"
                    >
                      {document.citta}
                    </div>
                  )}
                </div>
              </div>
            )}
            {(document.data || document.anno) && (
              <div className="filter-block-document">
                <div className="filter-name">data</div>
                <div className="filter-body">
                  {document.anno && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?anno=${document.anno}`)
                      }
                      className="circle-filter pointer"
                    >
                      {document.anno}
                    </div>
                  )}
                  {document.anno !== document.data && (
                    <div
                      onClick={() =>
                        history.push(`/catalogue?anno=${document.anno}`)
                      }
                      className="circle-filter pointer"
                    >
                      {document.data}
                    </div>
                  )}
                </div>
              </div>
            )}
            {document.tipologia && (
              <div className="filter-block-document">
                <div className="filter-name">tipologia</div>
                <div className="filter-body">
                  <div
                    onClick={() =>
                      history.push(`/catalogue?tipologia=${document.tipologia}`)
                    }
                    className="circle-filter pointer"
                  >
                    {document.tipologia}
                  </div>
                </div>
              </div>
            )}
            {document.content_provider && (
              <div className="filter-block-document">
                <div className="filter-name">provenienza</div>
                <div className="filter-body">
                  <div
                    onClick={() =>
                      history.push(
                        `/catalogue?content_provider=${document.content_provider}`
                      )
                    }
                    className="circle-filter pointer"
                  >
                    {document.content_provider}
                  </div>
                </div>
              </div>
            )}
            {document.rights && (
              <div className="filter-block-document">
                <div className="filter-name">creatore del documento</div>
                <div className="filter-body">
                  <div
                    onClick={() =>
                      history.push(`/catalogue?rights=${document.rights}`)
                    }
                    className="circle-filter pointer"
                  >
                    {document.rights}
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
