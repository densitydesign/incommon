import React, { useCallback, useState } from 'react'
import useQueryParams from 'magik-react-hooks/useRouterQueryParams'
import { qpInt } from 'magik-react-hooks/qpUtils'
import { Link } from 'react-router-dom'
import MenuTop from '../../components/MenuTop'
import FiltersCatalogo from '../../components/FiltersCatalogo'
import './Catalogo.css'
import { useDocuments, useDocumentsCount } from '../../hooks/documents'
import DocumentCatalogItem from '../../components/DocumentCatalogItem'

const params = {
  page: 1,
}
export default function Catalogo() {
  const [{ documents, hasNext, count }] = useDocuments(params)
  const [{ countInfo }] = useDocumentsCount()

  const [{ page }, setQueryParams] = useQueryParams({
    page: qpInt(),
  })
  console.log('P', page)

  const [isCollapsed, setCollapsed] = useState(false)

  const toggleCollapseDocuments = useCallback(() => {
    setCollapsed(collapse => !collapse)
  }, [])

  return (
    <div className="Catalogo">
      <MenuTop />
      <div className="d-flex">
        <div className="block-filters">
          <div className="d-flex">
            <div className="raggruppa-button" onClick={() => toggleCollapseDocuments()}>raggruppa i fascicoli</div>
            <div className="reset-filtri">cancella i filtri</div>
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
          <div className="container">
            <FiltersCatalogo />
          </div>
        </div>
        <div className='block-catalogo ml-4 mr-4 mb-4 d-flex flex-row flex-wrap'>
          {documents &&
            documents.map((document, index) => (
              <DocumentCatalogItem key={index} document={document} />
            ))}
        </div>
      </div>
    </div>
  )
}
