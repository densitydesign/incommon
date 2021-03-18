import React, { useState } from "react"
import classnames from "classnames"
import "./InfoSpettacolo.css"
import { countBy } from "lodash"

const MicroFilter = ({ name, count }) => {
  return (
    <div className="item-micro-spettacolo mt-2 d-flex">
      <div className="d-flex w-100 pointer justify-content-between align-items-center">
        <div style={{ width: "80%" }}>{name}</div>
        <div>{count}</div>
      </div>
    </div>
  )
}

export default function InfoSpettacolo({ toggleShowMoreInfo, caseStudy }) {
  const [group, setGroup] = useState(null)

  const countByTipologia = countBy(caseStudy.images, "tipologia")

  const countByArchivio = countBy(caseStudy.images, "content_provider")

  console.log(countByTipologia)

  return (
    <div className="block-left-spettacolo">
      <div className="block-info-spettacolo">
        <div className="title-spettacolo">{caseStudy.caption}</div>
        <div className="mt-4 pointer more-info" onClick={toggleShowMoreInfo}>
          + Info
        </div>
        <div className="block-raggruppa">
          <u>Raggruppa per</u>:
          <div
            onClick={() => setGroup("archivio")}
            className={classnames("item-group pointer", {
              "item-group-active": group === "archivio",
            })}
          >
            Archivio
          </div>
          <div
            onClick={() => setGroup("tipologia")}
            className={classnames("item-group pointer", {
              "item-group-active": group === "tipologia",
            })}
          >
            Tipologia
          </div>
        </div>
        {group && (
          <div className="filters-spettacolo">
            <u>Filtra:</u>
            <div className="filter-active">
              {group === "archivio" ? "Archivio" : "Tipologia"}
            </div>
            {group === "tipologia" && (
              <div className="mt-4">
                {Object.keys(countByTipologia).map((tipologia) => (
                  <MicroFilter
                    key={tipologia}
                    name={tipologia}
                    count={countByTipologia[tipologia]}
                  />
                ))}
              </div>
            )}
            {group === "archivio" && (
              <div className="mt-4">
                {Object.keys(countByArchivio).map((archivio) => (
                  <MicroFilter
                    key={archivio}
                    name={archivio}
                    count={countByArchivio[archivio]}
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
