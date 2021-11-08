import find from "lodash/find"
import React, { useMemo, useState } from "react"
import useMemoCompare from "magik-react-hooks/useMemoCompare"
import { Link, useParams } from "react-router-dom"
import FiltersSpettacoloDetail from "../../../components/DettaglioSpettacolo/FiltersSpettacoloDetail"
import InfoSpettacolo from "../../../components/DettaglioSpettacolo/InfoSpettacolo"
import MenuTop from "../../../components/MenuTop"
import { shuffle } from "seed-shuffle"
import ImagesStack from "../../../components/DettaglioSpettacolo/ImagesStack"
import AnimatedImageStack from "../../../components/DettaglioSpettacolo/AnimatedImageStack"
import "./CaseStudy.css"
import { useDocuments, imageWithLocaPreview } from "../../../hooks/documents"
import PannelloInfo from "../../../components/PannelloInfo"
import { flatMap, groupBy } from "lodash"

// Mantain the same "random" for the entire user session
// NOTE: Place a literal Es:. 5 to have ALWAYS the same random factor
const RANDOM_SEED = 1 + Math.floor(Math.random() * 1000)

function CaseStudy({ caseStudy }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [archivio, setArchivio] = useState(null)
  const [tipologia, setTipologia] = useState(null)
  const [group, setGroup] = useState(null)

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

  const [{ documents }] = useDocuments(
    useMemoCompare({
      casestudy: caseStudy.titolo,
    })
  )

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
    Object.keys(groupedArchivio).map(
      (archivio) => groupedArchivio[archivio]
    )
  )
  const imagesByTipologia = Object.assign(
    {},
    Object.keys(groupedTipologia).map(
      (tipologia) => groupedTipologia[tipologia]
    )
  )

  // const imagesByArchivioLength = Object.keys(
  //   groupBy(images, "content_provider")
  // ).length
  // const imagesByArchivioOld = groupBy(
  //   images.map((img, index) => ({ ...img, index })),
  //   (img) => img.index % imagesByArchivioLength
  // )

  // console.log(imagesByArchivio, imagesByArchivioOld)

  // const imagesOfDocs = useMemo(() => {
  //   if (documents === null) {
  //     return []
  //   }
  //   return flatMap(documents, (doc) => doc.images)
  // }, [documents])

  // console.log(images)

  const byGroup = useMemo(() => {
    return {
      archivio: imagesByArchivio,
      tipologia: imagesByTipologia,
    }
  }, [imagesByArchivio, imagesByTipologia])

  return (
    <div className="d-flex page">
      {/* TODO: Rename 2 case study */}
      {/* {showMoreInfo && (
        <FiltersSpettacoloDetail
          caseStudy={caseStudy}
          toggleShowMoreInfo={toggleShowMoreInfo}
        />
      )} */}
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
            link={`/recomposition/${caseStudy.slug}/slideshow`}
            images={images}
            byGroup={byGroup}
          />
        )}
        {/* {group && group === "archivio" ? (
          Object.keys(imagesByArchivio).map((archivio, i) => (
            <ImagesStack
              key={archivio}
              images={imagesByArchivio[archivio]}
              link={`/recomposition/${caseStudy.slug}/slideshow`}
            />
          ))
        ) : group && group === "tipologia" ? (
          Object.keys(imagesByTipologia).map((tipologia) => (
            <ImagesStack
              key={tipologia}
              images={imagesByTipologia[tipologia]}
              link={`/recomposition/${caseStudy.slug}/slideshow`}
            />
          ))
        ) : (
          <ImagesStack
            images={images}
            link={`/recomposition/${caseStudy.slug}/slideshow`}
          />
        )} */}
      </div>
    </div>
  )
}

export default function CaseStudyDetail({ caseStudies }) {
  const { slug } = useParams()
  const [panelInfo, setPanelInfo] = useState(false)

  const caseStudy = useMemo(() => find(caseStudies, { slug }), [
    caseStudies,
    slug,
  ])

  return (
    <div className="DettaglioSpettacolo">
      <MenuTop panelInfo={panelInfo} setPanelInfo={setPanelInfo} />
      {caseStudy && <CaseStudy caseStudy={caseStudy} />}
      {panelInfo &&
        <PannelloInfo type='spettacoli' />
      }
    </div>
  )
}
