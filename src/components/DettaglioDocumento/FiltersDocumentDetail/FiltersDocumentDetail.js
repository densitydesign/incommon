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
        {document && (
          <div className="title-document">{document.spettacolo}</div>
        )}
        {document && (
          <div className="description-document">
            Cartellina con {document.images.length} fogli manoscritti con note e
            frammenti per il testo di {document.spettacolo}.
          </div>
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
                <div>
                  <span>id</span>
                  <span className="ml-5 text-red">{document.id}</span>
                </div>
              )}
              {/* <div className="mt-2">
                <span>diritti</span>
                <span className="ml-5 text-red"></span>
              </div> */}
              {document.persona && (
                <div className="mt-2">
                  <span>referente</span>
                  <span className="ml-5 text-red"></span>
                </div>
              )}
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
                        `/catalogo-dei-documenti?spettacolo=${document.spettacolo}`
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
                        history.push(
                          `/catalogo-dei-documenti?luogo=${document.luogo}`
                        )
                      }
                      className="circle-filter pointer"
                    >
                      {document.luogo}
                    </div>
                  )}
                  {document.citta && (
                    <div
                      onClick={() =>
                        history.push(
                          `/catalogo-dei-documenti?citta=${document.citta}`
                        )
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
                  <div className="circle-filter">{document.data}</div>
                  {document.anno && (
                    <div
                      onClick={() =>
                        history.push(
                          `/catalogo-dei-documenti?anno=${document.anno}`
                        )
                      }
                      className="circle-filter pointer"
                    >
                      {document.anno}
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
                      history.push(
                        `/catalogo-dei-documenti?tipologia=${document.tipologia}`
                      )
                    }
                    className="circle-filter pointer"
                  >
                    {document.tipologia}
                  </div>
                </div>
              </div>
            )}
            {document.persona && (
              <div className="filter-block-document">
                <div className="filter-name">creatore del documento</div>
                <div className="filter-body">
                  <div
                    onClick={() =>
                      history.push(
                        `/catalogo-dei-documenti?persona=${document.persona}`
                      )
                    }
                    className="circle-filter pointer"
                  >
                    {document.persona}
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
