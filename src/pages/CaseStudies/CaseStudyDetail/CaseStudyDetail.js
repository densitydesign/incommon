import find from 'lodash/find'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoSpettacolo from '../../../components/DettaglioSpettacolo/InfoSpettacolo'
import MenuTop from '../../../components/MenuTop'
import { shuffle } from 'seed-shuffle'
import AnimatedImageStack from '../../../components/DettaglioSpettacolo/AnimatedImageStack'
import './CaseStudy.css'
import { imageWithLocaPreview } from '../../../hooks/documents'
import { groupBy } from 'lodash'
import ReadMorePanel from '../../../components/ReadMorePanel'

// Mantain the same "random" for the entire user session
// NOTE: Place a literal Es:. 5 to have ALWAYS the same random factor
const RANDOM_SEED = 1 + Math.floor(Math.random() * 1000)

function CaseStudy({ caseStudy, setReadMore }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [archivio, setArchivio] = useState(null)
  const [tipologia, setTipologia] = useState(null)
  const [group, setGroup] = useState(null)

  const linkDocuments = useMemo(() => {
    let link = `/catalogue?casestudy=${caseStudy.titolo}`
    if (tipologia) {
      link = link + `&tipologia=${tipologia}`
    }
    if (archivio) {
      link = link + `&content_provider=${archivio}`
    }
    return link
  }, [caseStudy, tipologia, archivio])

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  const images = useMemo(() => {
    // TODO: FIlter correct types ....

    const imagesToUse = caseStudy.images

    let imgs = []

    if (caseStudy.titolo === 'Scontri Generali ') {
      const imagesQuadernoMano = imagesToUse.filter(
        (i) => i.tipologia === 'Quaderno manoscritto'
      )
      const imagesFogliManoscritti = imagesToUse.filter(
        (i) => i.tipologia === 'Fogli manoscritti'
      )
      const imagesDisegniPreparatori = imagesToUse.filter(
        (i) => i.tipologia === 'Disegni preparatori'
      )
      const imagesFotoGrafiaBN = imagesToUse.filter(
        (i) => i.tipologia === 'Fotografia b/n'
      )
      const imagesFogliDattilo = imagesToUse.filter(
        (i) => i.tipologia === 'Fogli dattiloscritti'
      )
      const imagesArticoli = imagesToUse.filter(
        (i) => i.tipologia === 'Articolo di giornale'
      )

      const imagesFotoAColori = imagesToUse.filter(
        (i) => i.tipologia === 'Fotografia a colori'
      )

      const imagesVolantino = imagesToUse.filter(
        (i) => i.tipologia === 'Volantino'
      )

      const imagesPartitura = imagesToUse.filter(
        (i) => i.tipologia === 'Partitura di scena'
      )

      const imagesCatalogo = imagesToUse.filter(
        (i) => i.tipologia === 'Catalogo'
      )

      const imagesAltro = imagesToUse.filter((i) => i.tipologia === 'Altro')

      const imagesStampaGrafica = imagesToUse.filter(
        (i) => i.tipologia === 'Stampa grafica'
      )

      const imagesPieghevole = imagesToUse.filter(
        (i) => i.tipologia === 'Pieghevole'
      )

      const imagesCopione = imagesToUse.filter(
        (i) => i.tipologia === 'Copione '
      )

      const imagesLettera = imagesToUse.filter((i) => i.tipologia === 'Lettera')

      imgs = [
        ...imagesQuadernoMano.slice(0, 10),
        ...imagesFogliManoscritti.slice(0, 10),
        ...imagesDisegniPreparatori.slice(0, 10),
        ...imagesFotoGrafiaBN.slice(0, 10),
        ...imagesFogliDattilo.slice(0, 10),
        ...imagesArticoli.slice(0, 10),
        ...imagesFotoAColori,
        ...imagesVolantino,
        ...imagesPartitura.slice(0, 10),
        ...imagesPartitura.slice(0, 10),
        ...imagesLettera,
        ...imagesCatalogo.slice(0, 10),
        ...imagesAltro,
        ...imagesStampaGrafica,
        ...imagesPieghevole,
        ...imagesCopione,
      ]
      return shuffle(
        imgs
          .filter((i) => i.image.match(/.(jpg|jpeg|png|gif)$/i))
          .filter((i) => (tipologia ? i.tipologia === tipologia : i))
          .filter((i) => (archivio ? i.content_provider === archivio : i))
          .map((i) => imageWithLocaPreview(i)),
        RANDOM_SEED
      )
    }

    return shuffle(
      imagesToUse
        .filter((i) => i.image.match(/.(jpg|jpeg|png|gif)$/i))
        .filter((i) => (tipologia ? i.tipologia === tipologia : i))
        .filter((i) => (archivio ? i.content_provider === archivio : i))
        .map((i) => imageWithLocaPreview(i)),
      RANDOM_SEED
    )
  }, [archivio, caseStudy.images, caseStudy.titolo, tipologia])
  // const images = []

  // const [{ documents }] = useDocuments(
  //   useMemoCompare({
  //     casestudy: caseStudy.titolo,
  //   })
  // )

  // const imagesByTipologiaLength = Object.keys(groupBy(images, "tipologia"))
  //   .length
  // const imagesByTipologia = groupBy(
  //   images.map((img, index) => ({ ...img, index })),
  //   (img) => img.index % imagesByTipologiaLength
  // )

  console.log(images)

  const groupedArchivio = groupBy(images, 'content_provider')
  const groupedTipologia = groupBy(images, 'tipologia')
  const imagesByArchivio = Object.assign(
    {},
    Object.keys(groupedArchivio).map((archivio) => groupedArchivio[archivio])
  )
  const imagesByTipologia = Object.assign(
    {},
    Object.keys(groupedTipologia).map(
      (tipologia) => groupedTipologia[tipologia]
    )
  )

  const byGroup = useMemo(() => {
    return {
      archivio: imagesByArchivio,
      tipologia: imagesByTipologia,
    }
  }, [imagesByArchivio, imagesByTipologia])

  return (
    <div className="d-flex page">
      <InfoSpettacolo
        caseStudy={caseStudy}
        setArchivio={setArchivio}
        setTipologia={setTipologia}
        setReadMore={setReadMore}
        group={group}
        archivio={archivio}
        tipologia={tipologia}
        setGroup={setGroup}
        toggleShowMoreInfo={toggleShowMoreInfo}
      />
      <div className="body-spettacolo d-flex justify-content-center align-items-center">
        {images && (
          <AnimatedImageStack
            group={group}
            archivio={archivio}
            tipologia={tipologia}
            link={linkDocuments}
            images={images}
            byGroup={byGroup}
          />
        )}
      </div>
    </div>
  )
}

export default function CaseStudyDetail({ caseStudies }) {
  const { slug } = useParams()
  const [readMore, setReadMore] = useState(false)
  const [closing, setClosing] = useState(false)

  const caseStudy = useMemo(
    () => find(caseStudies, { slug }),
    [caseStudies, slug]
  )

  return (
    <div className="DettaglioSpettacolo">
      <MenuTop typePanel={'spettacoli'} />
      {caseStudy && (
        <CaseStudy setReadMore={setReadMore} caseStudy={caseStudy} />
      )}
      {readMore && (
        <ReadMorePanel
          setClosing={setClosing}
          closing={closing}
          readMore={readMore}
          setReadMore={setReadMore}
          caseStudy={caseStudy}
        />
      )}
    </div>
  )
}
