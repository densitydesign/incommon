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
    description: 'Edoardo II da Christopher Marlowe è uno spettacolo diretto da Carmelo Bene, con la collaborazione di Salvatore Siniscalchi, andato in scena sotto l’egida della Compagnia Teatro Workshop Club, al Teatro Arlecchino di Roma il 31 maggio 1963. Il ritrovamento del copione, la raccolta di recensioni e note critiche sullo spettacolo e il rinvenimento di pagine manoscritte di Bene (da intendersi come il bozzetto per un progetto filmico mai realizzato sullo stesso soggetto), contribuiscono a gettare luce su uno snodo di passaggio tra la vicenda di San Cosimato e la successiva “peregrinazione” nei teatri romani, che culmina con fondazione del Teatro Carmelo Bene (1968), ultimo laboratorio di ricerca, prima del cinema e dei grandi teatri di fine anni Settanta e Ottanta. Le fotografie inedite di Claudio Abate permettono di ricostruire la qualità atmosferica della rappresentazione, il gioco di concerto degli attori, le scelte scenografiche e, più in generale, l’interesse in cui matura la futura esperienza cinematografica.',
    description_en: 'Edoardo II by Christopher Marlowe is a play directed by Carmelo Bene with the collaboration of Salvatore Siniscalchi, which was staged under the aegis of the Compagnia Teatro Workshop Club, at the Teatro Arlecchino in Rome on May 31, 1963. The discovery of the script, the collection of reviews and critical notes on the play, and the discovery of papers handwritten by Bene (to be understood as a draft for a film project on the same subject that was never completed), help to cast light on a transitional node between the San Cosimato affair and the subsequent “pilgrimage” from one Roman theatre to the next, which culminated in the foundation of the Teatro Carmelo Bene (1968), his last experimental workshop before film and the major theatres in the late 1970s and 1980s. The previously unpublished photographs by Claudio Abate make it possible to reconstruct the atmosphere of the performance, the concerted interplay between the actors, the choices for the scenography and more in general, the interest underlying his future experience in film.',
    images: [],
  },

  {
    titolo: "Festival di S. Beckett",
    caption: "Festival di Beckett",
    slug: "festival-di-s-beckett",
    backgroundImage: "url(/spettacolo/festival-beckett.png)",
    year: 1965,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Zip-lap-lip-vap-mam-crep-scap-plip-trip-scrap e la grande mam alle prese con la ",
    caption: "ZIP",
    slug: "zip",
    backgroundImage: "url(/spettacolo/zip.png)",
    year: 1965,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Nostra Signora dei Turchi",
    caption: "Nostra Signora dei Turchi",
    slug: "nostra-signora-dei-turchi",
    backgroundImage: "url(/spettacolo/nostra-signora.png)",
    year: 1966,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Don Chisciotte ",
    caption: "Don Chisciotte",
    slug: "don-chisciotte",
    backgroundImage: "url(/spettacolo/don-chisciotte.png)",
    year: 1968,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Sir and Lady Macbeth",
    caption: "Sir and Lady Macbeth",
    slug: "sir-and-lady-macbeth",
    backgroundImage: "url(/spettacolo/macbeth.png)",
    year: 1968,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Orlando Furioso",
    caption: "Orlando Furioso",
    slug: "orlando-furioso",
    backgroundImage: "url(/spettacolo/orlando-furioso.png)",
    year: 1969,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Azioni di Decentramento (Torino 1969-70)",
    caption:"Decentramento",
    slug: "decentramento",
    backgroundImage: "url(/spettacolo/decentramento.png)",
    description: 'Lorem ipsum',
    year: "1969-1970",
    images: [],
  },
  {
    titolo: "Scontri Generali ",
    caption: "Scontri Generali",
    slug: "scontri-generali",
    backgroundImage: "url(/spettacolo/scontri-generali.png)",
    year: 1971,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Cenerella",
    caption: "Cenerella",
    slug: "cenerella",
    backgroundImage: "url(/spettacolo/cenerella.png)",
    year: 1973,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Sudd",
    caption: "SUDD",
    slug: "sudd",
    backgroundImage: "url(/spettacolo/sudd.png)",
    year: 1974,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "La rivolta degli oggetti",
    caption: "La rivolta degli oggetti",
    slug: "la-rivolta-degli-oggetti",
    backgroundImage: "url(/spettacolo/rivolta-oggetti.png)",
    year: 1976,
    description: 'Lorem ipsum',
    images: [],
  },
  {
    titolo: "Rotobolo",
    caption: "Rotobolo",
    slug: "rotobolo",
    backgroundImage: "url(/spettacolo/rotobolo.png)",
    year: 1976,
    description: 'Lorem ipsum',
    images: [],
  },

  {
    titolo: "Luci della città",
    caption:"Luci della città",
    slug: "luci-della-citta",
    backgroundImage: "url(/spettacolo/luci-citta.png)",
    description: 'Lorem ipsum',
    year: 1976,
    images: [],
  },

  {
    titolo: "Cronache marziane",
    caption:"Cronache marziane",
    slug: "cronache-marziane",
    backgroundImage: "url(/spettacolo/cronache-marziane.png)",
    description: 'Lorem ipsum',
    year: 1977,
    images: [],
  },

  {
    titolo: "Cottimisti",
    caption:"Cottimisti",
    slug: "cottimisti",
    backgroundImage: "url(/spettacolo/cottimisti.png)",
    description: 'Lorem ipsum',
    year: 1977,
    images: [],
  },

  {
    titolo: "Assoli",
    caption:"Assoli",
    slug: "assoli",
    backgroundImage: "url(/spettacolo/assoli.png)",
    description: 'Lorem ipsum',
    year: 1977,
    images: [],
  },
  {
    titolo: "Mors II",
    caption:"Mors II",
    slug: "mors",
    backgroundImage: "url(/spettacolo/mors.png)",
    description: 'Lorem ipsum',
    year: 1979,
    images: [],
  },
  {
    titolo: "Theatre Functions Terminated",
    caption:"Theatre Functions Terminated",
    slug: "theatre-functions-terminated",
    backgroundImage: "url(/spettacolo/theatre-functions-terminated.png)",
    description: 'Lorem ipsum',
    year: 1979,
    images: [],
  },
  {
    titolo: "Theatre Functions Critical",
    caption:"Theatre Functions Critical",
    slug: "theatre-functions-critical",
    backgroundImage: "url(/spettacolo/theatre-functions-critical.png)",
    description: 'Lorem ipsum',
    year: 1979,
    images: [],
  },

  {
    titolo: "The a tre",
    caption:"Theatre",
    slug: "theatre",
    backgroundImage: "url(/spettacolo/theatre.png)",
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
