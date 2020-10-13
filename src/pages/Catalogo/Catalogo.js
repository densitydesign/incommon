import React, { useCallback, useState } from "react"
import useDebounceQueryParams from "magik-react-hooks/useRouterDebounceQueryParams"
import { qpList } from "magik-react-hooks/qpUtils"
import MenuTop from "../../components/MenuTop"
import FiltersCatalogo from "../../components/Catalogo/FiltersCatalogo"
import "./Catalogo.css"
import { useDocuments, useDocumentsCount } from "../../hooks/documents"
import DocumentCatalogItem from "../../components/Catalogo/DocumentCatalogItem"
import FiltersCatalogoActive from "../../components/Catalogo/FiltersCatalogoActive"
import { Waypoint } from "react-waypoint"

export default function Catalogo() {
  const [{ countInfo }] = useDocumentsCount()

  const [
    queryParams,
    setQueryParams,
    debQueryParams,
    setDebQueryParams,
  ] = useDebounceQueryParams({
    tipologia: qpList(),
    spettacolo: qpList(),
    luogo: qpList(),
    citta: qpList(),
    persona: qpList(),
    anno: qpList(),
    rivista: qpList(),
    compagnia: qpList(),
  })

  const { q = "" } = queryParams
  const handleSearch = (e) => {
    const q = e.target.value
    setDebQueryParams({ q, page: 1 })
  }

  const [{ documents, hasNext, count }] = useDocuments(debQueryParams)

  const [isCollapsed, setCollapsed] = useState(false)

  const toggleCollapseDocuments = useCallback(() => {
    setCollapsed((collapse) => !collapse)
  }, [])

  const addFilter = useCallback(
    (name, value) => {
      setQueryParams((queryParams) => ({
        ...queryParams,
        [name]: (queryParams[name] ?? []).concat(value),
      }))
    },
    [setQueryParams]
  )

  const removeFilter = useCallback(
    (name, value) => {
      setQueryParams((queryParams) => ({
        ...queryParams,
        [name]: (queryParams[name] ?? []).filter((a) => a !== value),
      }))
    },
    [setQueryParams]
  )

  const reset = () => {
    setQueryParams(() => ({}))
  }

  return (
    <div className="Catalogo">
      <MenuTop />
      <div className="d-flex page">
        <div className="block-filters position-sticky">
          <div className="">
            <div className="d-flex">
              <div
                className="raggruppa-button pointer w-55"
                onClick={() => toggleCollapseDocuments()}
              >
                {isCollapsed ? "separa i fascicoli" : "raggruppa i fascicoli"}
                <img height='12' className='ml-2' src='raggruppa_fascicoli.svg' alt='Raggruppa fascicoli' />
              </div>
              <div
                onClick={() => reset()}
                className="reset-filtri w-45 pointer"
              >
                 cancella i filtri <img height='13' className='ml-2' src='mostra_filtri.svg' alt='Reset filtri' />
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
          </div>
          <FiltersCatalogoActive
            removeFilter={removeFilter}
            filters={debQueryParams}
          />
          <FiltersCatalogo
            handleSearch={handleSearch}
            countBy={countInfo?.countBy ?? {}}
            filters={debQueryParams}
            addFilter={addFilter}
            search={q}
          />
        </div>
        <div className="block-catalogo  overflow-scroll ml-4 mr-4 d-flex flex-row flex-wrap">
          <Waypoint
            topOffset={"50%"}
            onLeave={() => setQueryParams({ page: [1, 2] })}
          >
            <div>
              {documents &&
                documents.map((document, index) => (
                  <DocumentCatalogItem
                    isCollapsed={isCollapsed}
                    key={index}
                    document={document}
                  />
                ))}
            </div>
          </Waypoint>
        </div>
      </div>
    </div>
  )
}
