import React, { Fragment } from "react"
import classnames from 'classnames'

export default function DocumentCatalogItem({ document, isCollapsed }) {
  return (
    <Fragment>
      {document.images &&
        document.images.map((img, index) => (
          <img
            className={classnames("mr-4 mt-4 pointer", {
              'position-absolute': isCollapsed
            })}
            key={index}
            src={img.image}
            alt={document.nome}
            height="120"
          />
        ))}
    </Fragment>
  )
}
