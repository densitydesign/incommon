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
    description: 'Il Festival di S. Beckett è organizzato dalla Compagnia della Ripresa al Teatro Mobile al Tevere in Via Tiberina Km.1 n. 116 a Prima Porta, Roma, dal 16 luglio al 31 agosto 1965. Il Festival comprendeva le rappresentazioni di Aspettando Godot (ed. del Teatro Studio - Teatro Stabile di Genova); Finale di partita, Atto senza parole II e l’evento collages, teatro narrativa poesia e saggistica di S. Beckett accompagnato da dibattiti e conferenze. Nella locandina del Festival, inoltre, è presentato Cartoteca (Teatro Universitario di Genova) come «inizio di un discorso sulle ultime tendenze a “forma aperta”». Tra i documenti raccolti anche i materiali informativi di accompagnamento al Festival, in cui è possibile leggere le motivazioni del Gruppo della Ripresa riguardo al significato di un Festival su Beckett, oltre a un’intervista audio a Quartucci e Tatò.',
    description_en: 'The S. Beckett Festival was organised by the Compagnia della Ripresa at the Teatro Mobile al Tevere in Via Tiberina Km.1 n. 116 at Prima Porta in Rome from July 16 to August 31,1965. The Festival featured performances of Aspettando Godot (in the version by the Teatro Studio – Teatro Stabile di Genova); Finale di partita, Atto senza parole II and the event titled collages, teatro narrativo poesia e saggistica di S. Beckett which also featured debates and lectures. Furthermore, the Festival poster presented Cartoteca (Teatro Universitario di Genova) as the «beginning of a discourse on the latest trends in “open-form theatre”». The collection of documents also includes the printed material that accompanied the Festival, which highlight the motivations of the Gruppo della Ripresa with regards to the meaning of a Festival about Beckett, in addition to an audio interview with Quartucci and Tatò.',

    images: [],
  },

  {
    titolo: "Zip-lap-lip-vap-mam-crep-scap-plip-trip-scrap e la grande mam alle prese con la ",
    caption: "ZIP",
    slug: "zip",
    backgroundImage: "url(/spettacolo/zip.png)",
    year: 1965,
    description: 'Diretto da Carlo Quartucci e scritto da Giuliano Scabia, lo spettacolo mette in scena le azioni di dieci maschere contemporanee, interpretate, tra gli altri, da (Anna D’Offizi, Leo De Berardinis e Rino Sudano). Scritto in gran parte durante le prove, in continuo dialogo con gli autori, è ispirato ad una rilettura modernista del teatro dei pupi. Zip può essere considerato come un vero e proprio momento di svolta, fissando alcuni punti fermi nel processo di sovversione del canone proprio di quella stagione: la perdita del centro nell’organizzazione dello spazio scenico; una testualità visuale dove parola, gesto, oggetto, immagine e suono condividono lo stesso livello di importanza; l’impossibilità di classificare l’opera secondo i generi tradizionali. Debutta alla Biennale di Venezia nel 1965.',
    description_en: 'Directed by Carlo Quartucci and written by Giuliano Scabia, the play brings to the stage the actions of ten contemporary characters played, among others, by Anna D’Offizi, Leo De Bernardinis and Rino Sudano. Written mostly during the rehearsal process, in a constant dialogue with the authors, it was inspired by a modernist reinterpretation of the pupi puppet theatre. Zip can be considered as a real turning point, which established a number of markers in the process to subvert the specific canon of the time: the loss of centre in the organisation of the stage space; a visual textuality in which word, gesture, object, image and sound are all equally important; the impossibility of classifying the work within traditional genres. It made its debut at La Biennale di Venezia in 1965.',
    images: [],
  },
  {
    titolo: "Nostra Signora dei Turchi",
    caption: "Nostra Signora dei Turchi",
    slug: "nostra-signora-dei-turchi",
    backgroundImage: "url(/spettacolo/nostra-signora.png)",
    year: 1966,
    description: 'Nostra Signora dei Turchi è un romanzo scritto da Carmelo Bene e pubblicato nel 1966, trasposto poi in forma scenica al Beat 72 di Roma (1966). Lo stesso soggetto diventa materia di un lungometraggio drammatico nel 1968, vincitore del Leone d’Argento alla Mostra del Cinema di Venezia, successivamente riproposto in versione scenica al Teatro delle Arti a Roma, nel 1973, da cui deriva anche una riduzione/ricreazione radiofonica. Il caso studio ha per oggetto le due versioni teatrali di Nostra Signora dei Turchi, quella del 1966 e la riprese degli anni Settanta a partire dall’anteprima al Teatro Eleonora Duse di Bologna del 1972, poi in scena al Teatro delle Arti nel 1973 e lungo la tournée italiana (Milano, Torino, Genova). Il confronto tra le fotografie di Riccardo Orsini e quelle di Claudio Abate, le recensioni, le analisi critiche, consentono di cogliere le varianti tra le due versioni sul piano registico, in relazione all’uso dello spazio (in considerazione anche della collaborazione con lo scenografo Gino Marotta per la versione 1972), alla drammaturgia delle luci e al ruolo attribuito agli interpreti, rintracciando l’influenza esercitata dal film sulla scrittura scenica. ',
    description_en: 'Nostra Signora dei Turchi is a novel written by Carmelo Bene, published in 1966 and later adapted for the stage at Beat 72 in Rome (1966). The same subject became the theme of a dramatic feature film in 1968, which won the Silver Lion at the Venice International Film Festival, and was later produced in a stage version at the Teatro delle Arti in Rome, in 1973, from which an adaptation/recreation for the radio was derived. The object of the case study are the two versions for the theatre of Nostra Signora dei Turchi, the 1966 version and the 1970s revival which previewed at the Teatro Eleonora Duse in Bologna in 1972, then played at the Teatro delle Arti in 1973 and toured Italy (Milan, Turin, Genoa). A comparative study of the photographs of Riccardo Orsini and those of Claudio Abate, the reviews, the critical analyses, make it possible to identify the variations between the two versions in terms of the director’s approach, relative to the use of the space (and considering the collaboration with set designer Gino Marotta for the 1972 version), to the dramaturgy of the lighting and the role assigned to the performers, exploring the influence of the film on ‘scenic writing’.',
    images: [],
  },
  {
    titolo: "Don Chisciotte ",
    caption: "Don Chisciotte",
    slug: "don-chisciotte",
    backgroundImage: "url(/spettacolo/don-chisciotte.png)",
    year: 1968,
    description: 'All’indomani dell’incontro al Convegno di Ivrea, Carmelo Bene e Leo de Berardinis intrecciano il loro percorso artistico collaborando alla realizzazione di Don Chisciotte da Miguel de Cervantes, “lettura concerto” pensata per gli spazi del Teatro Carmelo Bene di Roma, andata in scena il 26 ottobre 1968. L’indagine archivistica condotta attraverso fondi e archivi privati  di collaboratori al progetto e collezionisti, ha condotto al ritrovamento del copione (dalla cui analisi è possibile scorgere scarti e debiti a Cervantes) e di immagini inedite che consentono la ricostruzione delle dinamiche relazionali tra gli interpreti – oltre a Bene e de Berardinis, Perla Peragallo, Lydia Mancinelli, Gustavo D’Arpe, Carla Colosimo, Claudio Orsi – e delle scelte scenografiche. Ad essi si aggiunge il confronto con note dattiloscritte e recensioni sullo spettacolo romano e sulla ripresa in scena al Teatro Gobetti di Torino il 9 dicembre 1968, per volontà di Edoardo Fadini.',
    description_en: 'After meeting at the Ivrea Conference, Carmelo Bene and Leo de Berardinis entwined their artistic paths working together to produce Don Chisciotte by Miguel de Cervantes, a “reading concert” conceived for the spaces of the Teatro Carmelo Bene in Rome, which opened on October 26, 1968.  The investigation into individual fonds and the private archives of collaborators on the project and collectors, led to the discovery of the script (the analysis of which shed light on deviations from and debts to Cervantes) and hitherto unpublished images that made it possible to reconstruct the dynamics of the relationships between the actors – in addition to Bene and de Berardinis, Perla Peragallo, Lydia Mancinelli, Gustavo D’Arpe, Carla Colosimo, Claudio Orsi – and the scenographic choices. Additional sources were found in typewritten notes and in the reviews of the show in Rome, and the later performance at the Teatro Gobetti in Turin on December 9 1968, organised by Edoardo Fadini',
    images: [],
  },

  {
    titolo: "Sir and Lady Macbeth",
    caption: "Sir and Lady Macbeth",
    slug: "sir-and-lady-macbeth",
    backgroundImage: "url(/spettacolo/macbeth.png)",
    year: 1968,
    description: 'Sir and lady Macbeth è il secondo spettacolo di Leo de Berardinis e Perla Peragallo, che muove da un testo shakespeariano. Debutta il 4 marzo 1968 al Teatro Carmelo Bene a Roma e si inserisce nel periodo di quello che più tardi i due definiranno come “teatro dell’errore”. I documenti (manoscritti, fotografie, materiale promozionale) che concorrono a costruire il caso studio provengono in gran parte dall’archivio di Carola de Berardinis e dal Fondo Franco Quadri: tra essi si segnala il quaderno manoscritto con note di regia, disegni e descrizione delle repliche. In questo, inoltre, la trascrizione del testo sotto forma di partitura codificata riporta suoni, cambi di intonazione e variazioni vocali, restituendone il disegno sonoro.',
    description_en: 'Sir and Lady Macbeth is the second play by Leo de Berardinis and Perla Peragallo, based on a play by Shakespeare. It made its debut on March 4 1968 at the Teatro Carmelo Bene in Rome, and belongs to the period that they would later define as the “theatre of error”. The documents (manuscripts, photographs, promotional material) that concur to build this case study are largely preserved in the archives of Carola de Berardinis and the Franco Quadri Fonds: they include the handwritten notebook with the directors’ notes, drawings and descriptions of the subsequent performances. Here, furthermore, the transcription of the text in the form of a codified score details the sounds, changes in intonation and vocal variations, conveying the original sound design.',
    images: [],
  },

  {
    titolo: "Orlando Furioso",
    caption: "Orlando Furioso",
    slug: "orlando-furioso",
    backgroundImage: "url(/spettacolo/orlando-furioso.png)",
    year: 1969,
    description: 'L’Orlando Furioso di Lodovico Ariosto nella riduzione di Edoardo Sanguineti per la regia di Luca Ronconi è fra gli spettacoli teatrali che meglio hanno incarnato il clima politico-culturale successivo al Sessantotto, quello di un’utopia possibile, in termini di spazio e di tempo, di un teatro popolare ritrovato perché capace di mantenere in comune, e di generare nuovo senso, nell’intero immaginario della sua festa. Il caso di studio viaggia tra le due versioni del lavoro, dalla prima spoletina del 1969, fotografata dall’occhio di Riccardo Orsini, immerso nel pubblico fino alla versione newyorkese del Bubble Theater a Bryant Park nel 1970, ricostruita grazie a una documentazione quasi del tutto inedita.',
    description_en: 'The Orlando Furioso by Lodovico Ariosto in the adaptation by Edoardo Sanguineti, directed by Luca Ronconi, is one of the theatrical events that best embodied the political and cultural climate that prevailed after 1968, that of a possible utopia, in terms of time and space, rediscovering the theatre of the people, which could maintain in common, and generate new meaning within the entire imaginary of its celebration. The case study covers the two versions of the work, from the debut in Spoleto in 1969, photographed through the lens of Riccardo Orsini, immersed in the audience, to the new version in New York at the Bubble Theater in Bryant Park in 1970, reconstructed through heretofore almost totally unpublished documentation.',
    images: [],
  },
  {
    titolo: "Azioni di Decentramento (Torino 1969-70)",
    caption:"Decentramento",
    slug: "decentramento",
    backgroundImage: "url(/spettacolo/decentramento.png)",
    description: 'Le azioni di decentramento di Scabia sono il frutto di sei mesi di lavoro assembleare in quattro quartieri operai di Torino. È il 1969, il capoluogo piemontese è l’epicentro dell’autunno caldo e Scabia immerge il proprio lavoro “nello spazio degli scontri” in corso. L’obiettivo è quello di rinnovare la prassi teatrale come elemento ulteriore del conflitto di classe. Tra i documenti raccolti si segnalano un’ampia raccolta di fotografie di scena delle azioni e un dattiloscritto con gli appunti della sceneggiatura per il Cinegiornale di Corso Taranto.',
    description_en: 'Scabia’s decentralisation actions were the outcome of a six-month programme of assemblies in four working-class districts in Turin. The year was 1969, the capital of the Piemonte region was the epicentre of the Hot Autumn and Scabia immersed his work “in the space of conflict” underway. The aim was to renovate the practice of theatre as a further element of the class struggle. The documents collected include a large selection of stage photographs of the actions and a typewritten report with notes on the script for the Cinegiornale di Corso Taranto.',
    year: "1969-1970",
    images: [],
  },
  {
    titolo: "Scontri Generali ",
    caption: "Scontri Generali",
    slug: "scontri-generali",
    backgroundImage: "url(/spettacolo/scontri-generali.png)",
    year: 1971,
    description: 'Nel 1968 Scabia pensava a Scontri Generali come ad un esercizio di scrittura collettiva da maturare assieme a diversi gruppi di operai Emiliani. Questo piano viene osteggiato dal PCI, preoccupato di un testo “scomodo”.  Alla fine lo spettacolo avrà una genesi più tradizionale e verrà presentato al Festival del Teatro di Prosa della Biennale di Venezia del 1971. Il testo (centrato sugli scontri che avvengono tra i componenti di un esercito assediato e asserragliato all’interno della propria città) è una metafora della dialettica interna al campo della sinistra ed una dolorosa riflessione sul destino dell’utopia socialista. Tra i documenti di maggior interesse: un rotolo con partitura visuale, un “progetto di spettacolo” e un’ampia selezione di appunti manoscritti di Giuliano Scabia.',
    description_en: 'In 1968 Scabia conceived of Scontri Generali as an exercise in collective writing to develop together with different groups of workers from the Emilia region. This plan was opposed by the Italian Communist Party, worried that the text could be “controversial”. In the end the play would have a more traditional genesis and would premiere at the Prose Theatre Festival of La Biennale di Venezia in 1971. The play (centred on the clashes between the components of an army under siege barricaded inside its own city) was a metaphor for the dialectic within the political left wing and a painful reflection on the fate of the Socialist utopia. The most interesting documents include: a roll with a visual score, a “project for a play” and an ample selection of Giuliano Scabia’s handwritten notes.',
    images: [],
  },
  {
    titolo: "Cenerella",
    caption: "Cenerella",
    slug: "cenerella",
    backgroundImage: "url(/spettacolo/cenerella.png)",
    year: 1973,
    description: 'Cenerella è il primo spettacolo dichiaratamente femminista del teatro italiano. Lina Mangiacapre disfa il mito della realizzazione attraverso il matrimonio e istituisce un nuovo femminile, fantasmagorico e indefinito. Il caso studio viaggia attraverso tre versioni del lavoro, i materiali provengono in gran parte dall’archivio privato di Lina Mangiacapre e delle Nemesiache a Posillipo (Napoli): tra i documenti di maggior rilievo si segnalano il copione manoscritto, i fogli con appunti e note autografi di Mangiacapre, le fotografie inedite della rappresentazione milanese del 1975, digitalizzate da diapositiva.',
    description_en: 'Cenerella was the first assertedly feminist play in Italian theatre. Lina Mangiacapre dismantles the myth of self-realisation through marriage and institutes a new womanhood, phantasmagorical and ill-defined. The case study covers three versions of the work, the materials come largely from the private archives of Lina Mangiacapre and the Nemesiache in Posillipo (Naples): the most significant documents include the handwritten script, the papers with notes and Mangiacapre’s handwritten annotations, the heretofore unpublished photographs of the performance in Milan in 1975, digitised from slides.',
    images: [],
  },
  {
    titolo: "Sudd",
    caption: "SUDD",
    slug: "sudd",
    backgroundImage: "url(/spettacolo/sudd.png)",
    year: 1974,
    description: 'Sudd è lo spettacolo che conclude la trilogia del meridione del Teatro di Marigliano, nome della compagnia che Leo de Berardinis e Perla Peragallo fondano nell’omonimo paese campano. Presentato per la prima volta a Roma nel maggio 1974 al Teatro Tenda Spaziozero, vede numerose repliche in Italia e in Francia, dove resterà in scena molto più del tempo previsto; in scena, oltre a Leo e Perla, sono presenti anche Sebastiano Devastato e Francesco Capasso. Il caso studio si muove tra le fotografie delle varie repliche, recensioni e materiali di lavoro provenienti dall’archivio privato di Carola de Berardinis e dal Fondo Franco Quadri: tra questi si segnala il quaderno manoscritto dello spettacolo nella versione del 1976 con note di regia, disegni e descrizione delle repliche',
    description_en: 'Sudd was the play that concluded the southern trilogy of the Teatro di Marigliano, the name of the company founded by Leo de Berardinis and Perla Peragallo in the town of that name in the Campania region. Premiered in Rome in May 1974 at the Teatro Tenda Spaziozero, it was performed many times in Italy and in France, where it would play for far longer than expected; on the stage, in addition to Leo and Perla, were Sebastiano Devastato and Francesco Capasso. The case study examines the photographs of the various performances, reviews and working material from the private archives of Carola de Berardinis and the Franco Quadri Fonds: they include the handwritten notebook of the play in the 1976 version with director’s notes, drawings and descriptions of the repeat performances.',
    images: [],
  },
  {
    titolo: "La rivolta degli oggetti",
    caption: "La rivolta degli oggetti",
    slug: "la-rivolta-degli-oggetti",
    backgroundImage: "url(/spettacolo/rivolta-oggetti.png)",
    year: 1976,
    description: 'Spettacolo d’esordio della Gaia Scienza, La rivolta degli oggetti nasce da un assemblaggio di testi di Majakovskij, frantumati e ripartiti tra voci e movimenti.  Il caso di studio riunisce materiali delle prime tre repliche del lavoro, a partire dal debutto al Beat 72. I documenti (bozze del copione, locandine, appunti) provengono in gran parte dall’archivio privato di Marco Solari, le fotografie da quello di Andrea Fiorentino: si aggiungono alcuni materiali dal Fondo Franco Quadri, i quaderni inediti di Alessandra Vanzi e le fotografie, anche queste inedite, di Giorgio Piredda. Il racconto del lavoro si snoda anche attraverso un prezioso documento audio, un dialogo a due voci registrato da Solari e Vanzi ad hoc per INCOMMON.',
    description_en: 'The first play ever staged by La Gaia Scienza, La rivolta degli oggetti springs from an assemblage of texts by Mayakovsky, fragmented and divided between voices and movements. The case study gathers materials from the first three performances of the work, starting with the debut at Beat 72. The documents (drafts of the script, posters, notes) come in large part from the private archives of Marco Solari, the photographs from that of Andrea Fiorentino: there are additional materials from the Franco Quadri Fonds, the unpublished notebooks of Alessandra Vanzi and the photographs, also heretofore unpublished, by Giorgio Piredda. The story of the work also unfurls through a valuable audio document, a two-voice dialogue recorded by Solari and Vanzi ad hoc for INCOMMON.',
    images: [],
  },
  {
    titolo: "Rotobolo",
    caption: "Rotobolo",
    slug: "rotobolo",
    backgroundImage: "url(/spettacolo/rotobolo.png)",
    year: 1976,
    description: 'Rotobolo è il nome della struttura cilindrica di otto tonnellate, progettata da Riccardo Caporossi nell\'ambito della sua tesi di laurea in Architettura. Rem e Cap la sviluppano come installazione-performance, interrogando radicalmente i temi della macchina, dell’automazione e del lavoro. Il caso studio descrive le due versioni di Rotobolo, che debutta a Milano nel 1976 e si ripresenta a Roma nel 1979. I materiali provengono in gran parte dall’archivio di Riccardo Caporossi, che ha fornito i disegni originali, le sinossi grafiche, le riprese della performance, le immagini e la rassegna stampa; ha fornito alcuni documenti anche l’archivio Franco Quadri. Collaborano all’apparato fotografico alcune fotografie digitalizzate per la prima volta dal Fondo Antonio Sferlazzo (Teatro La Pergola, Firenze).',
    description_en: 'Rotobolo is the name of the eight-ton cylindrical structure designed by Riccardo Caporossi for his thesis in Architecture. Rem&Cap developed it as an installation performance, radically interrogating the themes of the machine, automation and labour. The case study describes the two versions of Rotobolo, which premiered in Milan in 1976 and was later presented in Rome in 1979. The materials come prevalently from the archives of Riccardo Caporossi, who provided the original drawings, the graphic synopses, the recordings of the performance, the images and the press releases; a number of documents was also provided by the Franco Quadri Fonds. The collection of photographs also includes photographs digitised for the first time from the Antonio Sferlazzo Fonds (Teatro La Pergola, Florence).',
    images: [],
  },

  {
    titolo: "Luci della città",
    caption:"Luci della città",
    slug: "luci-della-citta",
    backgroundImage: "url(/spettacolo/luci-citta.png)",
    description: 'Luci della città è una performance di Simone Carella e La Gaia Scienza, avvenuta nella Palestra dello Spirito Santo a Cosenza l’11 novembre del 1976, nell’ambito della Prima Rassegna di Post Avanguardia (8-13 novembre 1976), organizzata da Giuseppe Bartolucci. Dopo un sopralluogo a Cosenza, Carella escluse il Teatro Comunale, scegliendo la palestra in quanto luogo neutro. La porta adiacente la strada lasciata aperta durante la performance modificava lo spazio: la strada entrava nella palestra mentre gli elementi costruiti continuavano all\'esterno. Gli specifici interventi scenici erano frutto del lavoro di équipe, risultato delle scelte attoriali di La Gaia Scienza, delle istanze spaziali di Carella e dell’intervento sullo spazio di un gruppo di pittori, poeti, fotografi e filmmaker. Tra i vari documenti del caso studio è presente un’ampia selezione fotografica proveniente dall’archivio privato di Giorgio Piredda.',
    description_en: 'Luci della città is a performance by Simone Carella and La Gaia Scienza, which took place in the Spirito Santo gymnasium in Cosenza on November 11 1976, as part of the First Post-Avantgarde Festival (8-13 November 1976) organised by Giuseppe Bartolucci. After an inspection on site in Cosenza, Carella rejected the Teatro Comunale, choosing the gymnasium as a neutral location. The door next to the street was left open during the performance to modify the space: the street entered the gymnasium while the built elements continued outdoors. The specific scenic interventions were produced by teamwork, as a result of La Gaia Scienza’s acting choices, of Carella’s spatial concerns and the work on the space of a group of painters, poets, photographers and filmmakers. The various documents about the case study include a large selection of photographs from the private archives of Giorgio Piredda.',
    year: 1976,
    images: [],
  },

  {
    titolo: "Cronache marziane",
    caption:"Cronache marziane",
    slug: "cronache-marziane",
    backgroundImage: "url(/spettacolo/cronache-marziane.png)",
    description: 'Cronache marziane è la seconda produzione della Gaia Scienza, un anno dopo La rivolta degli oggetti. Presentato al Beat 72, il lavoro prosegue in quella sperimentazione performativa radicale, che vale al gruppo l’inserimento nella tendenza spiazzante della postavanguardia. Cronache marziane a partire da una riflessione sullo spazio scenico si muove tra danza, parole spezzate, citazioni artistiche e allusioni politiche, lavora sull’idea della crisi. I documenti (inviti, programma di sala, rassegna stampa) provengono in gran parte dall’archivio privato di Marco Solari, le fotografie per lo più inedite di Andrea Fiorentino sono state digitalizzate da diapositiva. Il racconto del lavoro si snoda anche attraverso un prezioso documento audio, un dialogo a due voci registrato da Solari e Vanzi ad hoc per INCOMMON.',
    description_en: 'Cronache marziane is the second production by La Gaia Scienza, a year after La rivolta degli oggetti. Presented at Beat 72, the work carries on the radical performative experimentation which earned the group its place within the disconcerting trend of the post-avantgarde. Cronache marziane moves from a reflection on theatrical space to engage in dance, broken words, artistic quotes and political illusions, working on the idea of crisis. The documents (invitations, programme, press releases) come largely from the private archives of Marco Solari, the mostly unpublished photographs by Andrea Fiorentino have been digitised from slides. The story of the work unfolds in a valuable audio document, a two-voice dialogue recorded by Solari and Vanzi ad hoc for INCOMMON.',
    year: 1977,
    images: [],
  },

  {
    titolo: "Cottimisti",
    caption:"Cottimisti",
    slug: "cottimisti",
    backgroundImage: "url(/spettacolo/cottimisti.png)",
    description: 'Dopo Rotobolo, Remondi e Caporossi sperimentano con Cottimisti un nuovo esempio materiale di teatro-lavoro, in cui loro stessi agiscono come attori operai. Il caso studio viaggia attraverso quattro versioni del lavoro, tutte del 1977, dal debutto romano di Trastevere passando per la versione di Milano, restituita dalle immagini inedite di Silvia Lelli, di Firenze, ampiamente fotografata da Antonio Sferlazzo fino alla trasferta internazionale di Amsterdam. Il resto dei materiali proviene dall’archivio privato di Riccardo Caporossi e dall\'archivio Franco Quadri. ',
    description_en: 'After Rotobolo, Remondi and Caporossi experiment with a new material example of theatre-labour in Cottimisti, in which they themselves operate as actor-workers. The case study covers four versions of the work, all produced in 1977, from the Roman debut in Trastevere, to the versions in Milan, shown in the heretofore unpublished images of Silvia Lelli, in Florence, extensively photographed by Antonio Sferlazzo, and to the international performance in Amsterdam. The rest of the material comes from the private archives of Riccardo Caporossi and the Franco Quadri Fonds.',
    year: 1977,
    images: [],
  },

  {
    titolo: "Assoli",
    caption:"Assoli",
    slug: "assoli",
    backgroundImage: "url(/spettacolo/assoli.png)",
    description: 'Con un intreccio di diversi dialetti e idiomi, in Assoli si confrontano solitudini e anche il diverso stare in scena di Leo de Berardinis e Perla Peragallo. Lo spettacolo, che segue il distacco da Marigliano, debutta al Teatro Alberico di Roma nel febbraio del 1977 e vede ancora in scena Nunzio Spiezia e Francesco Capasso, reduci del periodo mariglianese. Tra i documenti che compongono il caso studio, le diverse stesure del testo registrano il loro essere unicamente traccia verbale di uno spettacolo che sulla scena doveva molto all’improvvisazione jazzistica. Oltre a queste foto, recensioni e una lunga registrazione video contribuiscono a descrivere l’atmosfera del lavoro',
    description_en: 'With a mix of different dialects and languages, Assoli addresses forms of solitude and the different approach to theatre of Leo de Berardinis and Perla Peragallo. The play, which is subsequent to their departure from Marigliano, premiered at the Teatro Alberico in Rome in February 1977 and also featured Nunzio Spiezia and Francesco Capasso, who had worked with them in Marigliano. Among the documents for the case study, the different drafts of the text remain the only verbal trace of a play that owed much on stage to jazz improvisation. In addition, photographs and reviews contribute to the description of the Roman premiere and the atmosphere.',
    year: 1977,
    images: [],
  },
  {
    titolo: "Mors II",
    caption:"Mors II",
    slug: "mors",
    backgroundImage: "url(/spettacolo/mors.png)",
    description: 'Testo scritto da Rino Sudano in collaborazione con Gigi Livio e recitato da Sudano e Anna D’Offizi, va in scena a Torino dal gennaio all’aprile del 1979, prima agli Infernotti, poi al Cabaret Voltaire. Lo spettacolo presenta un’azione ogni sera differente, ed è ispirato a quattro figure fondamentali nello sviluppo della poetica di Sudano: Beckett, Marx, Masoch e Sade. Si tratta di un progetto complesso e sfaccettato dove Sudano mette al lavoro una certa dialettica negativa (non a caso l’autore stesso definiva Mors II come “anti-laboratorio”), tesa a mettere in luce i limiti della società dello spettacolo. Di particolare interesse, oltre ad un’ampia selezione di fotografie di scena, è la presenza di un copione dattiloscritto.',
    description_en: 'A play written by Rino Sudano in collaboration with Gigi Livio and performed by Sudano and Anna D’Offizi, it ran in Turin from January to April 1979, first at the Infernotti, then at the Cabaret Voltaire. The show presented a different action every evening, and was inspired by four fundamental figures in the development of Sudano’s poetics: Beckett, Marx, Masoch and Sade. The project was a complex and multifaceted work in which Sudano brings to bear a certain negative dialectic (not coincidentally the author himself defined Mors as an “anti-workshop”) aimed at shedding light on the limits of the entertainment society. Of particular interest, in addition to a wide selection of stage photographs, is the presence of a typed script.',
    year: 1979,
    images: [],
  },
  {
    titolo: "Theatre Functions Terminated",
    caption:"Theatre Functions Terminated",
    slug: "theatre-functions-terminated",
    backgroundImage: "url(/spettacolo/theatre-functions-terminated.png)",
    description: 'Spettacolo - installazione di Mario Martone rappresentato al Beat 72 di Roma dall\'11 al 16 giugno 1979 e prodotto da Falso Movimento con la collaborazione di Angelo Curti, Pasquale Mari, Federica della Ratta-Rinaldi, Andrea Renzi. Theatre Functions Critical, nell’ambiente chiuso e vuoto del Beat 72, prevedeva l’uso di microfoni per registrare suoni, voci e rumori degli spettatori riprodotti ad alto volume nello spazio scenico allestito.Theatre Functions Critical compone un dittico con la  performance Theatre Functions Terminated; i titoli delle performance rimandano al linguaggio dei calcolatori elettronici oltre che a un riferimento al film di  Stanley Kubrick 2001: Odissea nello spazio. I due eventi performativi così correlati segnano per Falso Movimento un esaurimento della prima “linea analitica” sul teatro per operare “alla sua periferia”, servendosi della radio, del cinema e della televisione utilizzati come mezzi per analizzare la vita.',
    description_en: 'The show-installation by Mario Martone performed at Beat 72 in Rome from June 11th to 16th 1979 and produced by Falso Movimento with the collaboration of Angelo Curti, Pasquale Mari, Federica della Ratta-Rionaldi, Andrea Renzi. Theatre Functions Critical, in the closed and empty space of Beat 72, used microphones to record the sounds, voices and noises of the spectators reproduced at full volume in the space of the theatre. Theatre Functions Critical is a part of a diptych that includes the performance Theatre Functions Terminated; the titles of the performances are borrowed from the language of computers and are also a reference to Stanley Kubrick’s film 2001: A Space Odyssey. The two correlated performative events mark the end for Falso Movimento of its first “analytical direction” on theatre to operate “at its edges”, using radio, cinema and television as means to analyse life.',
    year: 1979,
    images: [],
  },
  {
    titolo: "Theatre Functions Critical",
    caption:"Theatre Functions Critical",
    slug: "theatre-functions-critical",
    backgroundImage: "url(/spettacolo/theatre-functions-critical.png)",
    description: 'Evento performativo di Mario Martone e Falso Movimento nell\'ambito della rassegna “Freddo-Caldo. Passaggio a sud-ovest: alle origini della tragedia" a cura di Giuseppe Bartolucci e Teatro Studio di Caserta, organizzata alla Reggia di Caserta dal 22 al 24 giugno 1979. Il titolo della performance rimanda al linguaggio dei calcolatori elettronici oltre che a un riferimento al film di  Stanley Kubrick 2001: Odissea nello spazio. Theatre Functions Terminated (Caserta, 24 giugno 1979) compone un dittico con l’installazione Theatre Functions Critical e segna per Falso Movimento un esaurimento della prima “linea analitica” sul teatro e un nuovo utilizzo di radio, cinema e televisione come mezzi di analisi della vita quotidiana. La performance si svolge negli spazi aperti della Reggia di Caserta: spettatori e componenti del gruppo teatrale indossano magliette bianche con una parola tratta dal titolo della performance mentre assistono al volo di un modellino di aereo radiocomandato.',
    description_en: 'A performative event by Mario Martone and Falso Movimento as part of the series “Freddo-Caldo. Passaggio a sud.ovest: alle origini della tragedia” curated by Giuseppe Bartolucci and Teatro Studio di Caserta, organised at the Reggia di Caserta from June 22nd to 24th1979. The title of the performance is borrowed from the language of computers and is also a reference to Stanley Kubrick’s film 2001: A Space Odyssey. Theatre Functions Terminated (Caserta, 24 June 1979) is a part of a diptych that includes the installation Theatre Functions Critical and for Falso Movimento marks the end of its first “analytical direction” on theatre and a new use of radio, cinema and television as means to analyse life. The performance took place in the open spaces of the Reggia di Caserta: spectators and members of the theatre group wore white T-shirts printed with a word from the title of the performance as they watched the flight of a remote-controlled model aeroplane.',
    year: 1979,
    images: [],
  },

  {
    titolo: "The a tre",
    caption:"Theatre",
    slug: "theatre",
    backgroundImage: "url(/spettacolo/theatre.png)",
    description: 'The a tre è un collettivo di ricerca performativa nato dalla volontà di creare un gruppo solo femminile e femminista che si potesse infiltrare nel circuito tutto maschile della postavanguardia. L’esperienza del gruppo è meteorica e dura solo un biennio, dal 1978 al 1980. Il caso di studio - l’unico che non ragiona su un lavoro ma su una formazione -  è costruito grazie all’archivio privato di Ippolita Avalli, fondatrice e anima ispiratrice del gruppo: i materiali fanno riferimento a tre lavori performativi, dal primo Theatre a Demetra Good Bye fino a Invalid Keyword.',
    description_en: 'The a tre is a performative research collective that was founded with the intent to create an exclusively female and feminist group that could infiltrate the all-male circuit of the post-avantgarde. The group’s experience was meteoric, and lasted only two years, from 1978 to 1980. The case study – the only one that was not centred on labour but on education – was built thanks to the private archives of Ippolita Avalli, founder, soul and inspiration of the group: the material refers to three performative works, from the first Theatre to Demetra Good Bye to Invalid Keyword.',
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
