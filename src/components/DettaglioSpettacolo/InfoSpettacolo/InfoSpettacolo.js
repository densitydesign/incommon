import React, { useState } from "react"
import classnames from "classnames"
import "./InfoSpettacolo.css"
import { countBy } from "lodash"

const MicroFilter = ({
  name,
  count,
  tipologia = null,
  setArchivio,
  setTipologia,
  archivio = null,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classnames("item-micro-spettacolo mt-2 d-flex", {
        "text-secondary":
          (tipologia && tipologia !== name) || (archivio && archivio !== name),
      })}
    >
      <div className="d-flex w-100 pointer justify-content-between align-items-center">
        <div style={{ width: "80%" }}>{name}</div>
        <div>{count}</div>
      </div>
    </div>
  )
}

export default function InfoSpettacolo({
  toggleShowMoreInfo,
  caseStudy,
  setArchivio,
  tipologia,
  archivio,
  group,
  setGroup,
  setTipologia,
}) {
  const countByTipologia = countBy(
    caseStudy.images.filter((i) => i.image.match(/.(jpg|jpeg|png|gif)$/i)),
    "tipologia"
  )

  const countByArchivio = countBy(
    caseStudy.images.filter((i) => i.image.match(/.(jpg|jpeg|png|gif)$/i)),
    "content_provider"
  )

  console.log(countByTipologia)

  return (
    <div className="block-left-spettacolo">
      <div className="block-info-spettacolo">
        <div className="title-spettacolo">{caseStudy.caption}</div>
        <div className='description-spettacolo'>
          {caseStudy.description}
        </div>
        {/* <div className="mt-4 pointer more-info" onClick={toggleShowMoreInfo}>
          + Info
        </div> */}
        <div className="block-raggruppa">
          <u>Group by</u>:
          <div
            onClick={() => {
              group === "archivio" ? setGroup("") : setGroup("archivio")
              setArchivio(null)
              setTipologia(null)
            }}
            className={classnames("item-group pointer", {
              "item-group-active": group === "archivio",
            })}
          >
            Archive
          </div>
          <div
            onClick={() => {
              group === "tipologia" ? setGroup("") : setGroup("tipologia")
              setArchivio(null)
              setTipologia(null)
            }}
            className={classnames("item-group pointer", {
              "item-group-active": group === "tipologia",
            })}
          >
            Type
          </div>
        </div>
        {group && (
          <div className="filters-spettacolo">
            <u>Filter:</u>
            {/* <div className="filter-active">
              {group === "archivio" ? "Archivio" : "Tipologia"}
            </div> */}
            {group === "tipologia" && (
              <div className="mt-2">
                {Object.keys(countByTipologia).map((tipologiaItem) => (
                  <MicroFilter
                    setTipologia={setTipologia}
                    onClick={() => tipologia !== tipologiaItem ? setTipologia(tipologiaItem) : setTipologia(null)}
                    key={tipologiaItem}
                    tipologia={tipologia}
                    name={tipologiaItem}
                    count={countByTipologia[tipologiaItem]}
                  />
                ))}
              </div>
            )}
            {group === "archivio" && (
              <div className="mt-2">
                {Object.keys(countByArchivio).map((archivioItem) => (
                  <MicroFilter
                    onClick={() => archivio !== archivioItem ? setArchivio(archivioItem) : setArchivio(null)}
                    key={archivioItem}
                    setArchivio={setArchivio}
                    archivio={archivio}
                    name={archivioItem}
                    count={countByArchivio[archivioItem]}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
