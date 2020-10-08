import React, { useCallback, useState } from 'react'
import useDebounceQueryParams from 'magik-react-hooks/useRouterDebounceQueryParams'
import { qpList } from 'magik-react-hooks/qpUtils'
import MenuTop from '../../components/MenuTop'
import FiltersCatalogo from '../../components/Catalogo/FiltersCatalogo'
import './Catalogo.css'
import { useDocuments, useDocumentsCount } from '../../hooks/documents'
import DocumentCatalogItem from '../../components/Catalogo/DocumentCatalogItem'
import FiltersCatalogoActive from '../../components/Catalogo/FiltersCatalogoActive'

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

  const { search = '' } = queryParams
  const handleSearch = (e) => {
    const search = e.target.value
    setDebQueryParams({ search, page: 1 })
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
        <div className="block-filters">
          <div className="position-sticky">
            <div className="d-flex">
              <div
                className="raggruppa-button pointer w-50"
                onClick={() => toggleCollapseDocuments()}
              >
                {isCollapsed ? 'separa i fascicoli' : 'raggruppa i fascicoli'}
              </div>
              <div
                onClick={() => reset()}
                className="reset-filtri w-50 pointer"
              >
                cancella i filtri
              </div>
            </div>
            <div className="count-documents">
              {count && countInfo && (
                <>
                  <span className="medium-font font-weight-bold mr-2">
                    {count} / {countInfo.count}
                  </span>{' '}
                  documenti
                </>
              )}
            </div>
          </div>
          <input type='text' value={search} onChange={handleSearch} />
          <FiltersCatalogoActive
            removeFilter={removeFilter}
            filters={debQueryParams}
            />
          <FiltersCatalogo
            countBy={countInfo?.countBy ?? {}}
            filters={debQueryParams}
            addFilter={addFilter}
          />
        </div>
        <div className="block-catalogo ml-4 mr-4 mb-4 d-flex flex-row flex-wrap">
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
