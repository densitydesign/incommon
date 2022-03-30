import React from "react"
import { keyBy } from "lodash"
import { useMemo } from "react"
import { rj, useRunRj } from "react-rocketjump"
import api from "../api"
import { BIG_PAGE_SIZE, rjIncommonList } from "../common"

export const configCaseStudies = [
  {
    titolo: "Edoardo II",
    caption: "Edoardo II",
    slug: "edoardo-2",
    backgroundImage: "url(/spettacolo/Edoardo-2.png)",
    year: 1963,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Festival di S. Beckett",
    caption: "Festival di Beckett",
    slug: "festival-di-s-beckett",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1965,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Zip-lap-lip-vap-mam-crep-scap-plip-trip-scrap e la grande mam alle prese con la ",
    caption: "ZIP",
    slug: "zip",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1965,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Nostra Signora dei Turchi",
    caption: "Nostra Signora dei Turchi",
    slug: "nostra-signora-dei-turchi",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1966,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Don Chisciotte ",
    caption: "Don Chisciotte",
    slug: "don-chisciotte",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1968,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Sir and Lady Macbeth",
    caption: "Sir and Lady Macbeth",
    slug: "sir-and-lady-macbeth",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1968,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Orlando Furioso",
    caption: "Orlando Furioso",
    slug: "orlando-furioso",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1969,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Azioni di Decentramento (Torino 1969-70)",
    caption:"Decentramento",
    slug: "decentramento",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: "1969-1970",
    images: [],
  },
  {
    titolo: "Scontri Generali ",
    caption: "Scontri Generali",
    slug: "scontri-generali",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1971,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Cenerella",
    caption: "Cenerella",
    slug: "cenerella",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1973,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Sudd",
    caption: "SUDD",
    slug: "sudd",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1974,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "La rivolta degli oggetti",
    caption: "La rivolta degli oggetti",
    slug: "la-rivolta-degli-oggetti",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1976,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Rotobolo",
    caption: "Rotobolo",
    slug: "rotobolo",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1976,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Luci della città",
    caption:"Luci della città",
    slug: "luci-della-citta",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: 1976,
    images: [],
  },

  {
    titolo: "Cronache marziane",
    caption:"Cronache marziane",
    slug: "cronache-marziane",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: 1977,
    images: [],
  },

  {
    titolo: "Cottimisti",
    caption:"Cottimisti",
    slug: "cottimisti",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: 1977,
    images: [],
  },

  {
    titolo: "Assoli",
    caption:"Assoli",
    slug: "assoli",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: 1977,
    images: [],
  },
  {
    titolo: "Mors II",
    caption:"Mors II",
    slug: "mors",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: 1979,
    images: [],
  },
  {
    titolo: "Theatre Functions Terminated",
    caption:"Theatre Functions Terminated",
    slug: "theatre-functions-terminated",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: 1979,
    images: [],
  },
  {
    titolo: "Theatre Functions Critical",
    caption:"Theatre Functions Critical",
    slug: "theatre-functions-critical",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: 1979,
    images: [],
  },

  {
    titolo: "The a tre",
    caption:"Theatre",
    slug: "theatre",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: "1978-1980",
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
