import { keyBy } from 'lodash'
import { useMemo } from 'react'
import { rj, useRunRj } from 'react-rocketjump'
import api from '../api'
import { BIG_PAGE_SIZE, rjIncommonList } from '../common'

export const configCaseStudies = [
  {
    titolo: 'Luci della città',
    caption: 'Luci della città',
    slug: 'luci-della-citta',
    backgroundImage: 'url(/spettacolo/Aspettando-godot.png)',
    year: 1970,
    images: [],
  },
  {
    titolo: "La faticosa messinscena dell'Amleto di William Shakespeare",
    caption: "La faticosa messinscena dell'Amleto di William Shakespeare",
    slug: 'la-faticosa-messinscena-dell-amleto-di-william-shakespeare',
    backgroundImage: 'url(/spettacolo/Aspettando-godot.png)',
    year: 1970,
    images: [],
  },
  {
    titolo: 'Edoardo II',
    caption: 'Edoardo II',
    slug: 'edoardo-2',
    backgroundImage: 'url(/spettacolo/Aspettando-godot.png)',
    year: 1970,
    images: [],
  },
  {
    titolo: 'Rotobolo',
    caption: 'Rotobolo',
    slug: 'robotolo',
    backgroundImage: 'url(/spettacolo/Aspettando-godot.png)',
    year: 1970,
    images: [],
  },
  {
    titolo: 'Don Chisciotte ',
    caption: 'Don Chisciotte',
    slug: 'don-chisciotte',
    backgroundImage: 'url(/spettacolo/Aspettando-godot.png)',
    year: 1970,
    images: [],
  },
]

export const CaseStudiesState = rj(rjIncommonList(), {
  name: 'CaseStudies',
  effect: () =>
    api.get('/api/casestudy', {
      pagesize: BIG_PAGE_SIZE,
    }),
  computed: {
    serverCaseStudies: 'getList',
  },
})

export default function useCaseStudies() {
  const [{ serverCaseStudies, ...state }, actions] = useRunRj(
    CaseStudiesState,
    []
  )

  const caseStudies = useMemo(() => {
    if (!serverCaseStudies) {
      return []
    }
    const byTitle = keyBy(serverCaseStudies, 'titolo')

    return configCaseStudies.map((caseStudy) => ({
      ...caseStudy,
      ...byTitle[caseStudy.titolo],
    }))
  }, [serverCaseStudies])

  return [{ caseStudies, ...state }, actions]
}
