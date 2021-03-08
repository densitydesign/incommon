import React, { Fragment } from "react"
import classnames from 'classnames'
import { useHistory } from 'react-router-dom'

export default function DocumentCatalogItem({ document, isCollapsed }) {

  const history = useHistory()

  return (
    <Fragment>
      {document.images &&
        document.images.map((img, index) => (
          <img
            className={classnames("mr-4 mt-4 pointer img-catalog", {
              'position-absolute': isCollapsed
            })}
            onClick={() => history.push('/catalogue/'+document.id)}
            key={index}
            src={img.localPreview}
            // src={img.preview}
            alt={document.nome}
            height="120"
          />
        ))}
    </Fragment>
  )
}
