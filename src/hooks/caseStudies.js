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
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1963,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Festival di Beckett",
    caption: "Festival di S. Beckett",
    slug: "festival-di-s-beckett",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1965,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "ZIP",
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
    titolo: "Scontri Generali",
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
    titolo: "SUDD",
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
    description: 'The first play ever staged by La Gaia Scienza, La rivolta degli oggetti springs from an assemblage of texts by Mayakovsky, fragmented and divided between voices and movements. The case study gathers materials from the first three performances of the work, starting with the debut at Beat 72. The documents (drafts of the script, posters, notes) come in large part from the private archives of Marco Solari, the photographs from that of Andrea Fiorentino: there are additional materials from the Franco Quadri Fonds, the unpublished notebooks of Alessandra Vanzi and the photographs, also heretofore unpublished, by Giorgio Piredda. The story of the work also unfurls through a valuable audio document, a two-voice dialogue recorded by Solari and Vanzi ad hoc for INCOMMON.',
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
    titolo: "Decentramento",
    caption:"Decentramento",
    slug: "decentramento",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: "1969-1970",
    images: [],
  },
  {
    titolo: "Theatre",
    caption:"Theatre",
    slug: "theatre",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    description: 'Lorem ipsum',
    year: "1978-1980",
    images: [],
  },
  {
    titolo: "La faticosa messinscena dell'Amleto di William Shakespeare",
    caption: "La faticosa messinscena dell'Amleto di William Shakespeare",
    slug: "la-faticosa-messinscena-dell-amleto-di-william-shakespeare",
    backgroundImage: "url(/spettacolo/Aspettando-godot.png)",
    year: 1970,
    description: 'Lorem ipsum',
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
