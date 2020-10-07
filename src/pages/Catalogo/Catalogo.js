import React from 'react'
import useQueryParams from 'magik-react-hooks/useRouterQueryParams'
import { qpInt } from 'magik-react-hooks/qpUtils'
import { Link } from 'react-router-dom'
import MenuTop from '../../components/MenuTop'
import FiltersCatalogo from '../../components/FiltersCatalogo'
import './Catalogo.css'
import { useDocuments, useDocumentsCount } from '../../hooks/documents'

const params = {
  page: 1,
}
export default function Catalogo() {
  const [{ documents, hasNext, count }] = useDocuments(params)
  console.log(documents, hasNext, count)

  const [{ countInfo }] = useDocumentsCount()
  console.log(countInfo)

  const [{ page }, setQueryParams] = useQueryParams({
    page: qpInt(),
  })
  console.log('P', page)

  return (
    <div className="Catalogo">
      <MenuTop />
      <div className="d-flex">
        <div className="block-filters">
          <div className="d-flex">
            <div className="raggruppa-button">raggruppa i fascicoli</div>
            <div className="reset-filtri">cancella i filtri</div>
          </div>
          <div style={{ height: 200 }}></div>
          <div className="container">
            <FiltersCatalogo />
          </div>
        </div>
        <div className="block-catalogo ml-4 mr-4 d-flex flex-row flex-wrap">
          {/* {images && images.map((image,key) => (
            <div style={{ height: 120 }} key={key} className='mr-4 mt-4 pointer'>
              <Link to={'/catalogo-dei-documenti/1'}>
                <img height={120} src={`/catalogo/${image}`} alt='Catalogo' />
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}
