import React, { useCallback, useMemo, useState } from 'react'
import useDebounceQueryParams from 'magik-react-hooks/useRouterDebounceQueryParams'
import { qpList } from 'magik-react-hooks/qpUtils'
import MenuTop from '../../components/MenuTop'
import FiltersCatalogo from '../../components/Catalogo/FiltersCatalogo'
import './Catalogo.css'
import { useDocuments, useDocumentsCount } from '../../hooks/documents'
import DocumentCatalogItem from '../../components/Catalogo/DocumentCatalogItem'
import FiltersCatalogoActive from '../../components/Catalogo/FiltersCatalogoActive'
import { Waypoint } from 'react-waypoint'

export default function Catalogo() {
  const [{ countInfo }] = useDocumentsCount()

  const [queryParams, setQueryParams, debQueryParams, setDebQueryParams] =
    useDebounceQueryParams({
      tipologia: qpList(),
      spettacolo: qpList(),
      luogo: qpList(),
      citta: qpList(),
      persona: qpList(),
      anno: qpList(),
      rivista: qpList(),
      compagnia: qpList(),
      content_provider: qpList(),
      casestudy: qpList()
    })

  const { q = '' } = queryParams
  const handleSearch = (e) => {
    const q = e.target.value
    setDebQueryParams({ q })
  }

  const resetSearch = () => {
    setDebQueryParams({ q: '' })
  }

  const apiParams = useMemo(
    () => ({ ...debQueryParams, page: 1 }),
    [debQueryParams]
  )
  const [{ documents, pagination, loading }, { run: fetchDocs }] =
    useDocuments(apiParams)

  const [isCollapsed, setCollapsed] = useState(false)
  const [panelInfo, setPanelInfo] = useState(false)

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

  function onReachBottom() {
    if (pagination.hasNext && !loading) {
      fetchDocs
        .withMeta({ append: true })
        .run({ ...debQueryParams, page: pagination.next.page })
    }
  }

  return (
    <div className="Catalogo">
      <MenuTop setPanelInfo={setPanelInfo} panelInfo={panelInfo} />
      <div className="d-flex page">
        <div className="block-filters position-sticky">
          <div className="">
            <div className="d-flex">
              <div
                className="raggruppa-button pointer w-50"
                onClick={() => toggleCollapseDocuments()}
              >
                {isCollapsed ? 'separe booklets' : 'group booklets'}
            {/*    <img
                  height="12"
                  className="ml-2"
                  src="raggruppa_fascicoli.svg"
                  alt="Raggruppa fascicoli"
                /> */}
              </div>
              <div
                onClick={() => reset()}
                className="reset-filtri w-50 pointer"
              >
                clear filters{' '}
              {/*     <img
                  height="13"
                  className="ml-2"
                  src="mostra_filtri.svg"
                  alt="Reset filtri"
                /> */}
              </div>
            </div>
            <div className="count-documents">
              {pagination.count && countInfo ? (
                <>
                  <span className="medium-font font-weight-bold mr-2">
                    {pagination.count} / {countInfo.count}
                  </span>{' '}
                  documents
                </>
              ) : <>
              <span className="medium-font font-weight-bold mr-2">
                    0 / 0
                  </span>{' '}
                  documents
              </>}
            </div>
          </div>
          <FiltersCatalogoActive
            removeFilter={removeFilter}
            filters={debQueryParams}
          />
          <FiltersCatalogo
            handleSearch={handleSearch}
            resetSearch={resetSearch}
            countBy={countInfo?.countBy ?? {}}
            filters={debQueryParams}
            addFilter={addFilter}
            search={q}
          />
        </div>
        <div className="block-catalogo overflow-scroll ml-4 mr-4">
          <div className=" d-flex flex-row flex-wrap">
            {documents &&
              documents.map((document, index) => (
                <DocumentCatalogItem
                  isCollapsed={isCollapsed}
                  key={index}
                  document={document}
                />
              ))}
          </div>
          <Waypoint onEnter={onReachBottom} />
        </div>
      </div>
      {/* {panelInfo && <PannelloInfo type="catalogo" />} */}
    </div>
  )
}
