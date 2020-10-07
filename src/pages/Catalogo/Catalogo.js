import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useQueryParams from 'magik-react-hooks/useRouterQueryParams'
import useDebounce from 'magik-react-hooks/useDebounce'
import MenuTop from '../../components/MenuTop'
import FiltersCatalogo from '../../components/FiltersCatalogo'
import './Catalogo.css'
import { useDocuments, useDocumentsCount } from '../../hooks/documents'
import DocumentCatalogItem from '../../components/DocumentCatalogItem'
import {
  qpList,
  useMemoShallowList,
  useDebounceCallback,
} from '../../utils'

export default function Catalogo() {
  const [{ countInfo }] = useDocumentsCount()

  const [queryParams, setQueryParams] = useQueryParams({
    tipologia: qpList(),
  })
  const { search = '' } = queryParams

  const tipologia = useMemoShallowList(queryParams.tipologia)

  // console.log('X', tipologia)

  useEffect(() => {
    console.log('TIPOLOGIA CHANGED!')
  }, [tipologia])

  const [{ page, filterSearch }, setLocalParams] = useState({
    page: 1,
    filterSearch: search,
  })

  const setPage = useCallback((page) => {
    setLocalParams((params) => ({ ...params, page }))
  }, [])

  const debouncedSearch = useDebounceCallback((filterSearch) => {
    console.log('DEBOUNCED!', filterSearch)
    setLocalParams({ filterSearch, page: 1 })
  }, 250)
  const handleSearch = (e) => {
    const search = e.target.value
    debouncedSearch(search)
    setQueryParams({ search })
  }

  // const debouncedSearch = useDebounce(search, 200)

  const filters = useMemo(
    () => ({
      q: filterSearch,
      tipologia,
      page,
    }),
    [page, filterSearch, tipologia]
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
      search: undefined,
    })
    setLocalParams({ page: 1, search: '' })
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
          <button onClick={() => setPage(2)}>X</button>
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
          {(filters.tipologia ?? []).map((tipologia) => (
            <span
              onClick={() => removeFilter('tipologia', tipologia)}
              className="mr-3"
              key={tipologia}
            >
              {tipologia}
            </span>
          ))}
          <div className="search-filter">
            <input type="search" value={search} onChange={handleSearch} />
          </div>
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
