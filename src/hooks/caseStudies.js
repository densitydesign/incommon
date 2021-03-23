import React from "react"
import { keyBy } from "lodash"
import { useMemo } from "react"
import { rj, useRunRj } from "react-rocketjump"
import api from "../api"
import { BIG_PAGE_SIZE, rjIncommonList } from "../common"

export const configCaseStudies = [
  {
    titolo: "Luci della città",
    caption: (
      <span>
        Luci della <br /> città
      </span>
    ),
    slug: "luci-della-citta",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
  {
    titolo: "La faticosa messinscena dell'Amleto di William Shakespeare",
    caption: "La faticosa messinscena dell'Amleto di William Shakespeare",
    slug: "la-faticosa-messinscena-dell-amleto-di-william-shakespeare",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
  {
    titolo: "Edoardo II",
    caption: "Edoardo II",
    slug: "edoardo-2",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
  {
    titolo: "Rotobolo",
    caption: "Rotobolo",
    slug: "robotolo",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
  {
    titolo: "Don Chisciotte ",
    caption: "Don Chisciotte",
    slug: "don-chisciotte",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
  {
    titolo: "Nostra Signora dei Turchi",
    caption: "Nostra Signora dei Turchi",
    slug: "nostra-signora-dei-turchi",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
  {
    titolo: "Sir and Lady Macbeth",
    caption: "Sir and Lady Macbeth",
    slug: "sir-and-lady-macbeth",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
  {
    titolo: "Orlando Furioso",
    caption: "Orlando Furioso",
    slug: "orlando-furioso",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
  {
    titolo: "Festival di S. Beckett",
    caption: "Festival di S. Beckett",
    slug: "festival-di-s-beckett",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    images: [],
  },
]

export const CaseStudiesState = rj(rjIncommonList(), {
  name: "CaseStudies",
  effect: () =>
    api.get("/api/casestudy", {
      pagesize: BIG_PAGE_SIZE,
    }),
  computed: {
    serverCaseStudies: "getList",
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
    const byTitle = keyBy(serverCaseStudies, "titolo")

    return configCaseStudies.map((caseStudy) => ({
      ...caseStudy,
      ...byTitle[caseStudy.titolo],
    }))
  }, [serverCaseStudies])

  return [{ caseStudies, ...state }, actions]
}
