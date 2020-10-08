import React, { useCallback, useMemo, useState } from 'react'
import useQueryParams from 'magik-react-hooks/useRouterQueryParams'
import MenuTop from '../../components/MenuTop'
import FiltersCatalogo from '../../components/Catalogo/FiltersCatalogo'
import './Catalogo.css'
import { useDocuments, useDocumentsCount } from '../../hooks/documents'
import DocumentCatalogItem from '../../components/Catalogo/DocumentCatalogItem'
import { qpList, useDebounceCallback, useMemoShallowList } from '../../utils'
import FiltersCatalogoActive from '../../components/Catalogo/FiltersCatalogoActive'

export default function Catalogo() {
  const [{ countInfo }] = useDocumentsCount()

  // TODO: IMPROVE THIS!
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
  const { search = '' } = queryParams

  const tipologia = useMemoShallowList(queryParams.tipologia)
  const spettacolo = useMemoShallowList(queryParams.spettacolo)
  const luogo = useMemoShallowList(queryParams.luogo)
  const citta = useMemoShallowList(queryParams.citta)
  const persona = useMemoShallowList(queryParams.persona)
  const anno = useMemoShallowList(queryParams.anno)
  const rivista = useMemoShallowList(queryParams.rivista)
  const campagna = useMemoShallowList(queryParams.campagna)

  const [{ page, filterSearch }, setLocalParams] = useState({
    page: 1,
    filterSearch: search,
  })

  const setPage = useCallback((page) => {
    setLocalParams((params) => ({ ...params, page }))
  }, [])

  const debouncedSearch = useDebounceCallback((filterSearch) => {
    setLocalParams({ filterSearch, page: 1 })
  }, 250)

  const handleSearch = (e) => {
    const search = e.target.value
    debouncedSearch(search)
    setQueryParams({ search })
  }

  const filters = useMemo(
    () => ({
      q: filterSearch,
      tipologia,
      spettacolo,
      luogo,
      citta,
      persona,
      anno,
      rivista,
      campagna,
      page,
    }),
    [
      filterSearch,
      tipologia,
      spettacolo,
      luogo,
      citta,
      persona,
      anno,
      rivista,
      campagna,
      page,
    ]
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
      spettacolo: undefined,
      luogo: undefined,
      anno: undefined,
      citta: undefined,
      rivista: undefined,
      compagnia: undefined,
      persona: undefined,
      search: undefined,
    })
    setLocalParams({ page: 1, search: '' })
  }

  return (
    <div className="Catalogo">
      <MenuTop />
      <div className="d-flex page">
        <div className="block-filters">
          <div className='position-sticky'>
            <div className="d-flex">
              <div
                className="raggruppa-button pointer w-50"
                onClick={() => toggleCollapseDocuments()}
              >
                {isCollapsed ? "separa i fascicoli" : "raggruppa i fascicoli"}
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
                  </span>{" "}
                  documenti
                </>
              )}
            </div>
          </div>
          <button onClick={() => setPage(2)}>X</button>
          <input type='text' value={search} onChange={handleSearch} />
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
          <FiltersCatalogoActive removeFilter={removeFilter} filters={filters} />
          <div className="container">
            <FiltersCatalogo
              countBy={countInfo?.countBy ?? {}}
              filters={filters}
            />
          </div>
          <FiltersCatalogo
            countBy={countInfo?.countBy ?? {}}
            filters={filters}
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
