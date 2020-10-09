import React from "react"
import MenuTop from "../../components/MenuTop"
import FiltersDocumentDetail from "../../components/DettaglioDocumento/FiltersDocumentDetail"
import "./DettaglioDocumento.css"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { useDocument } from "../../hooks/documents"
import { useParams } from "react-router-dom"

export default function DettaglioDocumento() {
  const { id } = useParams()
  const [{ document }] = useDocument(id)

  console.log(document)

  return (
    <div className="DettaglioDocumento">
      <MenuTop />
      <div className="d-flex page">
        <FiltersDocumentDetail document={document} />
        {document && (
          <TransformWrapper defaultScale={1}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <div className="body-document">
                <div className="header-images d-flex justify-content-between">
                  <div className="zoom-buttons d-flex align-items-center">
                    <div className="pointer" onClick={zoomOut}>
                      <img src={"/zoom-out.svg"} alt="Zoom out" />
                    </div>
                    <div className="ml-3 pointer" onClick={resetTransform}>
                      reset
                    </div>
                    <div className="ml-3 pointer" onClick={zoomIn}>
                      <img src={"/zoom-in.svg"} alt="Zoom in" />
                    </div>
                  </div>
                </div>
                <div className="img-document d-flex justify-content-center mt-4 mb-4 overflow-scroll">
                  <TransformComponent>
                    <img src={document.images[0].image} alt={document.spettacolo} style={{ height: '80vh'}} />
                  </TransformComponent>
                </div>
              </div>
            )}
          </TransformWrapper>
        )}
      </div>
    </div>
  )
}
