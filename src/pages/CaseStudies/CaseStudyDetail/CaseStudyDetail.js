import find from 'lodash/find'
import React, { useMemo, useState } from 'react'
import useMemoCompare from 'magik-react-hooks/useMemoCompare'
import { useParams } from 'react-router-dom'
import FiltersSpettacoloDetail from '../../../components/DettaglioSpettacolo/FiltersSpettacoloDetail'
import InfoSpettacolo from '../../../components/DettaglioSpettacolo/InfoSpettacolo'
import MenuTop from '../../../components/MenuTop'
import { shuffle } from 'seed-shuffle'
import ImagesStack from '../../../components/DettaglioSpettacolo/ImagesStack'
import './CaseStudy.css'
import { useDocuments } from '../../../hooks/documents'
import { flatMap } from 'lodash'

// Mantain the same "random" for the entire user session
// NOTE: Place a literal Es:. 5 to have ALWAYS the same random factor
const RANDOM_SEED = 1 + Math.floor(Math.random() * 1000)

function CaseStudy({ caseStudy }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  // const images = useMemo(() => {
  //   // TODO: FIlter correct types ....
  //   return shuffle(
  //     caseStudy.images.map((i) => i.image),
  //     RANDOM_SEED
  //   )
  // }, [caseStudy.images])
  const images = []

  const [{ documents }] = useDocuments(useMemoCompare({
    casestudy: caseStudy.titolo
  }))

  const imagesOfDocs = useMemo(() => {
    if (documents === null) {
      return []
    }
    return flatMap(documents, doc => doc.images)
  }, [documents])

  console.log('CaseStudy', { caseStudy, imagesOfDocs })

  return (
    <div className="d-flex page">
      {/* TODO: Rename 2 case study */}
      {showMoreInfo && (
        <FiltersSpettacoloDetail toggleShowMoreInfo={toggleShowMoreInfo} />
      )}
      <InfoSpettacolo toggleShowMoreInfo={toggleShowMoreInfo} />
      <div className="body-spettacolo d-flex justify-content-center align-items-center">
        <ImagesStack images={images} link={`/recomposition/${caseStudy.slug}/slideshow`} />
      </div>
    </div>
  )
}

export default function CaseStudyDetail({ caseStudies }) {
  const { slug } = useParams()

  const caseStudy = useMemo(() => find(caseStudies, { slug }), [
    caseStudies,
    slug,
  ])

  return (
    <div className="DettaglioSpettacolo">
      <MenuTop />
      {caseStudy && <CaseStudy caseStudy={caseStudy} />}
    </div>
  )
}
