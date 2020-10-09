import React, { useState } from "react"
import MenuTop from "../../components/MenuTop"
import FiltersDocumentDetail from "../../components/DettaglioDocumento/FiltersDocumentDetail"
import "./DettaglioDocumento.css"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { useDocument } from "../../hooks/documents"
import { useHistory, useParams } from "react-router-dom"

export default function DettaglioDocumento() {
  const { id } = useParams()
  const [{ document }] = useDocument(id)

  const history = useHistory()

  const [currentSlide, setCurrentSlide] = useState(0)

  const prev = () => {
    setCurrentSlide(currentSlide - 1)
  }

  const next = () => {
    setCurrentSlide(currentSlide + 1)
  }

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
                  <div className="d-flex align-items-center">
                    {currentSlide !== 0 && (
                      <div className='pointer' onClick={() => prev()}>
                        <img src="/arrow-left.svg" alt="back" />
                      </div>
                    )}
                    <div className="ml-2">
                      {currentSlide + 1} / {document.images.length}
                    </div>
                    {currentSlide !== document.images.length - 1 &&
                      document.images.length > 1 && (
                        <div className="ml-2 pointer" onClick={() => next()}>
                          <img src="/arrow-right.svg" alt="back" />
                        </div>
                      )}
                    <div onClick={() => history.goBack()} className='pointer ml-4'>
                      <img src='/close-document.svg' alt='Close document' />
                    </div>
                  </div>
                </div>
                <div className="img-document d-flex align-items-center justify-content-center mb-4">
                  <TransformComponent>
                    <Carousel
                      showArrows={false}
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                      selectedItem={currentSlide}
                    >
                      {document.images &&
                        document.images.map((image, key) => (
                          <div key={key}>
                            <img
                              src={image.image}
                              alt={document.spettacolo}
                              style={{ width: "40%" }}
                            />
                          </div>
                        ))}
                    </Carousel>
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
