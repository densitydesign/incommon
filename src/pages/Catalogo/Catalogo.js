import React, { useCallback, useMemo, useState } from 'react'
import useQueryParams from 'magik-react-hooks/useRouterQueryParams'
import MenuTop from '../../components/MenuTop'
import FiltersCatalogo from '../../components/FiltersCatalogo'
import './Catalogo.css'
import { useDocuments, useDocumentsCount } from '../../hooks/documents'
import DocumentCatalogItem from '../../components/DocumentCatalogItem'
import { qpList } from '../../utils'

export default function Catalogo() {
  const [{ countInfo }] = useDocumentsCount()

  const [page, setPage] = useState(1)
  const [queryParams, setQueryParams] = useQueryParams({
    tipologia: qpList(),
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

  return (
    <div className="Catalogo">
      <MenuTop />
      <div className="d-flex">
        <div className="block-filters">
          <div className="d-flex">
            <div className="raggruppa-button pointer w-50" onClick={() => toggleCollapseDocuments()}>
              {isCollapsed ? 'separa i fascicoli' : 'raggruppa i fascicoli'}
            </div>
            <div className="reset-filtri w-50">cancella i filtri</div>
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
          {(filters.tipologia ?? []).map((tipolgia) => (
            <span
              onClick={() => removeFilter('tipologia', tipolgia)}
              className="mr-3"
              key={tipolgia}
            >
              {tipolgia}
            </span>
          ))}
          <div className="container">
            <FiltersCatalogo
              countBy={countInfo?.countBy ?? {}}
              filters={filters}
              addFilter={addFilter}
            />
          </div>
        </div>
        <div className='block-catalogo ml-4 mr-4 mb-4 d-flex flex-row flex-wrap position-relative'>
          {documents &&
            documents.map((document, index) => (
              <DocumentCatalogItem isCollapsed={isCollapsed} key={index} document={document} />
            ))}
        </div>
      </div>
    </div>
  )
}
