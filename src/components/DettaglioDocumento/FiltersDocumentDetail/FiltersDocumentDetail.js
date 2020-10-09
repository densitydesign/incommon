import React, { useState } from "react"
import classnames from "classnames"
import "./FiltersDocumentDetail.css"

export default function FiltersDocumentDetail({ document }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  console.log(document,'document')

  return (
    <div className="block-left-detail position-relative">
      <div className="block-info-document position-sticky">
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
              <div className="mt-2">
                <span>diritti</span>
                <span className="ml-5 text-red"></span>
              </div>
              <div className="mt-2">
                <span>referente</span>
                <span className="ml-5 text-red">Baravalle, M.</span>
              </div>
              <div className="mt-3">
                informazioni sui diritti del documento
                <div className="text-red mt-1">
                  Archivio Privato Giuliano Scabia, Firenze - Giuliano Scabia
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="block-filters-detail overflow-scroll">
        <div className="label-filter">Filtra il catalogo per:</div>
        {document && (
          <>
            <div className="filter-block mt-3">
              <div className="filter-name">spettacolo</div>
              <div className="filter-body">
                <div className="circle-filter">{document.spettacolo}</div>
              </div>
            </div>
            <div className="filter-block">
              <div className="filter-name">luogo</div>
              <div className="filter-body">
                <div className="circle-filter">{document.luogo}</div>
                {document.citta && (
                  <div className="circle-filter">{document.citta}</div>
                )}
              </div>
            </div>
            <div className="filter-block">
              <div className="filter-name">data</div>
              <div className="filter-body">
                <div className="circle-filter">{document.data}</div>
                <div className="circle-filter">{document.anno}</div>
              </div>
            </div>
            {document.tipologia && (
              <div className="filter-block">
                <div className="filter-name">tipologia</div>
                <div className="filter-body">
                  <div className="circle-filter">{document.tipologia}</div>
                </div>
              </div>
            )}
            {document.persona && (
              <div className="filter-block">
                <div className="filter-name">creatore del documento</div>
                <div className="filter-body">
                  <div className="circle-filter">{document.persona}</div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
