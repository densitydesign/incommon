import React from "react"

export default function DocumentCatalogItem({ document, isCollapsed }) {
  return (
    <>
      {document.images &&
        document.images.map((img, index) => (
          <img
            className="mr-4 mt-4 pointer"
            key={index}
            src={img.image}
            alt={document.nome}
            height="120"
          />
        ))}
    </>
  )
}
