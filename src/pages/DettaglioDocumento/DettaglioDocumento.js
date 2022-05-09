import React, { useMemo, useState } from 'react'
import MenuTop from '../../components/MenuTop'
import FiltersDocumentDetail from '../../components/DettaglioDocumento/FiltersDocumentDetail'
import './DettaglioDocumento.css'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useDocument } from '../../hooks/documents'
import { useHistory, useParams } from 'react-router-dom'

const CarouselImages = ({ currentSlide, document }) => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      dynamicHeight
      swipeable={false}
      showIndicators={false}
      showThumbs={false}
      selectedItem={currentSlide}
    >
      {document.images &&
        document.images.map((image, key) => (
          <div key={key}>
            <img src={image.image} alt={document.spettacolo} />
          </div>
        ))}
    </Carousel>
  )
}

function ImageDetail({ currentSlide, next, prev, document }) {
  const history = useHistory()
  return (
    <TransformWrapper centerOnInit={true} minScale={0.35} initialScale={0.35}>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <div className="body-document">
          <div className="header-images d-flex justify-content-between">
            <div className="zoom-buttons d-flex align-items-center">
              <div
                className="pointer"
                style={{ zIndex: 101 }}
                onClick={() => zoomOut()}
              >
                <img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = '/zoom-out-white.svg')
                  }
                  onMouseLeave={(e) => (e.currentTarget.src = '/zoom-out.svg')}
                  src={'/zoom-out.svg'}
                  alt="Zoom out"
                />
              </div>
              <div
                style={{ zIndex: 101 }}
                className="ml-3 pointer reset"
                onClick={() => resetTransform()}
              >
                reset
              </div>
              <div
                style={{ zIndex: 101 }}
                className="ml-3 pointer"
                onClick={() => zoomIn()}
              >
                <img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = '/zoom-in-white.svg')
                  }
                  onMouseLeave={(e) => (e.currentTarget.src = '/zoom-in.svg')}
                  src={'/zoom-in.svg'}
                  alt="Zoom in"
                />
              </div>
            </div>
            <div className="d-flex align-items-center">
              {currentSlide !== 0 && (
                <div
                  style={{ zIndex: 101 }}
                  className="pointer"
                  onClick={() => prev()}
                >
                  <img src="/arrow-left.svg" alt="back" />
                </div>
              )}
              <div className="ml-2">
                {currentSlide + 1} / {document.images.length}
              </div>
              {currentSlide !== document.images.length - 1 &&
                document.images.length > 1 && (
                  <div
                    style={{ zIndex: 101 }}
                    className="ml-2 pointer"
                    onClick={() => next()}
                  >
                    <img src="/arrow-right.svg" alt="back" />
                  </div>
                )}
              <div
                onClick={() => history.goBack()}
                className="pointer ml-4"
                style={{ zIndex: 101 }}
              >
                <img src="/close-document.svg" alt="Close document" />
              </div>
            </div>
          </div>
          <div className="img-document d-flex align-items-center justify-content-center">
            <div
              style={{
                width: 300,
                position: 'absolute',
                left: '25%',
                top: 57,
                height: 'calc(100vh - 120px)',
                zIndex: 100,
              }}
              onClick={() => {
                if (currentSlide !== 0) {
                  prev()
                }
              }}
            ></div>
            <div
              style={{
                width: 300,
                position: 'absolute',
                right: 0,
                top: 57,
                height: 'calc(100vh - 120px)',
                zIndex: 100,
              }}
              onClick={() => {
                if (
                  currentSlide !== document.images.length - 1 &&
                  document.images.length > 1
                ) {
                  next()
                }
              }}
            ></div>
            <TransformComponent
              // contentStyle={{ paddingTop: 20, paddingBottom: 20, height: '90%' }}
              wrapperStyle={{ width: '100%', height: '100%' }}
            >
              <CarouselImages currentSlide={currentSlide} document={document} />
            </TransformComponent>
          </div>
        </div>
      )}
    </TransformWrapper>
  )
}

function VideoDetail({ currentSlide, document }) {
  const history = useHistory()
  return (
    <div className="body-document">
      <div className="header-images d-flex justify-content-end">
        <div className="zoom-buttons d-flex align-items-end">
          <div
            onClick={() => history.goBack()}
            className="pointer ml-4"
            style={{ zIndex: 101 }}
          >
            <img src="/close-document.svg" alt="Close document" />
          </div>
        </div>
      </div>
      <video autoPlay controls className="p-5" height={'90%'} width="100%">
        <source src={document.images[currentSlide].image} />
      </video>
    </div>
  )
}

function AudioDetail({ currentSlide, document }) {
  const history = useHistory()
  return (
    <div className="body-document">
      <div className="header-images d-flex justify-content-end">
        <div className="zoom-buttons d-flex align-items-end">
          <div
            onClick={() => history.goBack()}
            className="pointer ml-4"
            style={{ zIndex: 101 }}
          >
            <img src="/close-document.svg" alt="Close document" />
          </div>
        </div>
      </div>
      <div style={{ height: 'calc(100% - 120px)'}} className='w-100 d-flex align-items-center justify-content-center'>
        <audio autoPlay controls height={'200'} width="100%">
          <source type="audio/mpeg" src={document.images[currentSlide].image} />
        </audio>
      </div>
    </div>
  )
}

export default function DettaglioDocumento() {
  const { id } = useParams()
  const [{ document }] = useDocument(id)

  const type = useMemo(() => {
    if (
      document &&
      (document.images[0].image.split('.').pop() === 'mp4' ||
        document.images[0].image.split('.').pop() === 'mov')
    ) {
      return 'video'
    } else if (
      document &&
      document.images[0].image.split('.').pop() === 'mp3'
    ) {
      return 'audio'
    } else {
      return 'image'
    }
  }, [document])

  const [currentSlide, setCurrentSlide] = useState(0)

  const prev = () => {
    setCurrentSlide(currentSlide - 1)
  }

  const next = () => {
    setCurrentSlide(currentSlide + 1)
  }

  return (
    <div className="DettaglioDocumento">
      <MenuTop typePanel="catalogo" />
      <div className="d-flex page">
        <FiltersDocumentDetail document={document} />
        {document && type === 'image' && (
          <ImageDetail
            prev={prev}
            next={next}
            document={document}
            currentSlide={currentSlide}
          />
        )}
        {document && type === 'video' && (
          <VideoDetail
            prev={prev}
            next={next}
            document={document}
            currentSlide={currentSlide}
          />
        )}
        {document && type === 'audio' && (
          <AudioDetail
            prev={prev}
            next={next}
            document={document}
            currentSlide={currentSlide}
          />
        )}
      </div>
    </div>
  )
}
