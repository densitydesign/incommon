import React, { Fragment, useMemo } from "react"
import classnames from 'classnames'
import { useHistory } from 'react-router-dom'

export default function DocumentCatalogItem({ document, isCollapsed }) {

  const history = useHistory()

  const images = useMemo(() => {
    return document.images.filter((i) => i.image.match(/.(jpg|jpeg|png|gif)$/i))
  },[document.images])


  return (
    <div className='position-relative d-inline-block'>
      { 
        images.map((img, index) => (
          <img
            style={{ zIndex: index, marginLeft: index === 0 ? 0 : '-90%' }}
            className={classnames("mr-4 mt-4 pointer img-catalog")}
            onClick={() => history.push('/catalogue/'+document.id)}
            key={index}
            //src={img.localPreview}
            src={img.preview}
            alt={document.nome}
            height="120"
          />
        ))}
    </div>
  )
}


