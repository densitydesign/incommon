import find from "lodash/find"
import React, { useMemo, useState } from "react"
import useMemoCompare from "magik-react-hooks/useMemoCompare"
import { useParams } from "react-router-dom"
import InfoSpettacolo from "../../../components/DettaglioSpettacolo/InfoSpettacolo"
import MenuTop from "../../../components/MenuTop"
import { shuffle } from "seed-shuffle"
import AnimatedImageStack from "../../../components/DettaglioSpettacolo/AnimatedImageStack"
import "./CaseStudy.css"
import { useDocuments, imageWithLocaPreview } from "../../../hooks/documents"
import PannelloInfo from "../../../components/PannelloInfo"
import { groupBy } from "lodash"

// Mantain the same "random" for the entire user session
// NOTE: Place a literal Es:. 5 to have ALWAYS the same random factor
const RANDOM_SEED = 1 + Math.floor(Math.random() * 1000)

function CaseStudy({ caseStudy }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [archivio, setArchivio] = useState(null)
  const [tipologia, setTipologia] = useState(null)
  const [group, setGroup] = useState(null)

  const linkDocuments = useMemo(() => {
    let link = `/catalogue?spettacolo=${caseStudy.titolo}`
    if(tipologia){
      link = link + `&tipologia=${tipologia}`
    }
    if(archivio){
      link = link + `&content_provider=${archivio}`
    }
    return link
  }, [caseStudy, tipologia, archivio])

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  const images = useMemo(() => {
    // TODO: FIlter correct types ....

    return shuffle(
      caseStudy.images
        .filter((i) => i.image.match(/.(jpg|jpeg|png|gif)$/i))
        .filter((i) => (tipologia ? i.tipologia === tipologia : i))
        .filter((i) => (archivio ? i.content_provider === archivio : i))
        .map((i) => imageWithLocaPreview(i)),
      RANDOM_SEED
    )
  }, [archivio, caseStudy.images, tipologia])
  // const images = []

  // const [{ documents }] = useDocuments(
  //   useMemoCompare({
  //     casestudy: caseStudy.titolo,
  //   })
  // )

  console.log(images, 'images')

  // const imagesByTipologiaLength = Object.keys(groupBy(images, "tipologia"))
  //   .length
  // const imagesByTipologia = groupBy(
  //   images.map((img, index) => ({ ...img, index })),
  //   (img) => img.index % imagesByTipologiaLength
  // )

  const groupedArchivio = groupBy(images, "content_provider")
  const groupedTipologia = groupBy(images, "tipologia")
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
  const [panelInfo, setPanelInfo] = useState(false)

  const caseStudy = useMemo(
    () => find(caseStudies, { slug }),
    [caseStudies, slug]
  )

  return (
    <div className="DettaglioSpettacolo">
      <MenuTop panelInfo={panelInfo} setPanelInfo={setPanelInfo} />
      {caseStudy && <CaseStudy caseStudy={caseStudy} />}
      {panelInfo && <PannelloInfo type="spettacoli" />}
    </div>
  )
}
