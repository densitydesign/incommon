import React, { useCallback, useMemo, useState } from "react"
import useQueryParams from "magik-react-hooks/useRouterQueryParams"
import MenuTop from "../../components/MenuTop"
import FiltersCatalogo from "../../components/FiltersCatalogo"
import "./Catalogo.css"
import { useDocuments, useDocumentsCount } from "../../hooks/documents"
import DocumentCatalogItem from "../../components/DocumentCatalogItem"
import { qpList } from "../../utils"

const FiltersActive = ({ filters, removeFilter }) => {
  return (
    <div className="filters-active d-flex flex-wrap">
      {(filters.tipologia ?? []).map((tipolgia) => (
        <span
          onClick={() => removeFilter("tipologia", tipolgia)}
          className="mr-3"
          key={tipolgia}
        >
          {tipolgia} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.spettacolo ?? []).map((spettacolo) => (
        <span
          onClick={() => removeFilter("spettacolo", spettacolo)}
          className="mr-3"
          key={spettacolo}
        >
          {spettacolo} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.luogo ?? []).map((luogo) => (
        <span
          onClick={() => removeFilter("luogo", luogo)}
          className="mr-3"
          key={luogo}
        >
          {luogo} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.citta ?? []).map((citta) => (
        <span
          onClick={() => removeFilter("citta", citta)}
          className="mr-3"
          key={citta}
        >
          {citta} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.rivista ?? []).map((rivista) => (
        <span
          onClick={() => removeFilter("rivista", rivista)}
          className="mr-3"
          key={rivista}
        >
          {rivista} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.anno ?? []).map((anno) => (
        <span
          onClick={() => removeFilter("anno", anno)}
          className="mr-3"
          key={anno}
        >
          {anno} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.compagnia ?? []).map((compagnia) => (
        <span
          onClick={() => removeFilter("compagnia", compagnia)}
          className="mr-3"
          key={compagnia}
        >
          {compagnia} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.persona ?? []).map((persona) => (
        <span
          onClick={() => removeFilter("persona", persona)}
          className="mr-3"
          key={persona}
        >
          {persona} <small className="ml-1">x</small>
        </span>
      ))}
    </div>
  )
}

export default function Catalogo() {
  const [{ countInfo }] = useDocumentsCount()

  const [page, setPage] = useState(1)
  const [queryParams, setQueryParams] = useQueryParams({
    tipologia: qpList(),
    spettacolo: qpList(),
    luogo: qpList(),
    citta: qpList(),
    persona: qpList(),
    anno: qpList(),
    rivista: qpList(),
    compagnia: qpList(),
  })

  const filters = useMemo(
    () => ({
      ...queryParams,
      page,
    }),
    [page, queryParams]
  )

  const [{ documents, hasNext, count }] = useDocuments(filters)

  const [isCollapsed, setCollapsed] = useState(false)

  const toggleCollapseDocuments = useCallback(() => {
    setCollapsed((collapse) => !collapse)
  }, [])

  const addFilter = (name, value) => {
    setQueryParams({ [name]: (queryParams[name] ?? []).concat(value) })
    setPage(1)
  }

  const removeFilter = (name, value) => {
    setQueryParams({
      [name]: (queryParams[name] ?? []).filter((a) => a !== value),
    })
    setPage(1)
  }

  const reset = () => {
    setQueryParams({
      tipologia: undefined,
    })
    setPage(1)
  }

  return (
    <div className="Catalogo">
      <MenuTop />
      <div className="d-flex">
        <div className="block-filters">
          <div className="d-flex">
            <div
              className="raggruppa-button pointer w-50"
              onClick={() => toggleCollapseDocuments()}
            >
              {isCollapsed ? 'separa i fascicoli' : 'raggruppa i fascicoli'}
            </div>
            <div onClick={() => reset()} className="reset-filtri w-50 pointer">
              cancella i filtri
            </div>
          </div>
          <div className="count-documents">
            {count && countInfo && (
              <>
                <span className="medium-font font-weight-bold mr-2">
                  {count} / {countInfo.count}
                </span>{" "}
                documenti
              </>
            )}
          </div>
          <FiltersActive removeFilter={removeFilter} filters={filters} />
          <div className="container">
            <FiltersCatalogo
              countBy={countInfo?.countBy ?? {}}
              filters={filters}
              addFilter={addFilter}
            />
          </div>
        </div>
        <div className="block-catalogo ml-4 mr-4 mb-4 d-flex flex-row flex-wrap position-relative">
          {documents &&
            documents.map((document, index) => (
              <DocumentCatalogItem
                isCollapsed={isCollapsed}
                key={index}
                document={document}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
