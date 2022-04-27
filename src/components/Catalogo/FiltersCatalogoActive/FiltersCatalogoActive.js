import React from 'react'
import mapLanguage from '../../../data/DocumentTypeDictionary.json'

export default function FiltersCatalogoActive({ filters, removeFilter }) {
  return (
    <div className="filters-active d-flex flex-wrap">
      {(filters.tipologia ?? []).map((tipolgia) => (
        <span
          onClick={() => removeFilter('tipologia', tipolgia)}
          className="mr-3"
          key={tipolgia}
        >
          {mapLanguage[tipolgia] ? mapLanguage[tipolgia] : tipolgia}{' '}
          <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.spettacolo ?? []).map((spettacolo) => (
        <span
          onClick={() => removeFilter('spettacolo', spettacolo)}
          className="mr-3"
          key={spettacolo}
        >
          {spettacolo} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.luogo ?? []).map((luogo) => (
        <span
          onClick={() => removeFilter('luogo', luogo)}
          className="mr-3"
          key={luogo}
        >
          {luogo} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.citta ?? []).map((citta) => (
        <span
          onClick={() => removeFilter('citta', citta)}
          className="mr-3"
          key={citta}
        >
          {citta} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.rivista ?? []).map((rivista) => (
        <span
          onClick={() => removeFilter('rivista', rivista)}
          className="mr-3"
          key={rivista}
        >
          {rivista} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.anno ?? []).map((anno) => (
        <span
          onClick={() => removeFilter('anno', anno)}
          className="mr-3"
          key={anno}
        >
          {anno} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.compagnia ?? []).map((compagnia) => (
        <span
          onClick={() => removeFilter('compagnia', compagnia)}
          className="mr-3"
          key={compagnia}
        >
          {compagnia} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.persona ?? []).map((persona) => (
        <span
          onClick={() => removeFilter('persona', persona)}
          className="mr-3"
          key={persona}
        >
          {persona} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.content_provider ?? []).map((content_provider) => (
        <span
          onClick={() => removeFilter('content_provider', content_provider)}
          className="mr-3"
          key={content_provider}
        >
          {content_provider} <small className="ml-1">x</small>
        </span>
      ))}
      {(filters.casestudy ?? []).map((casestudy) => (
        <span
          onClick={() => removeFilter('casestudy', casestudy)}
          className="mr-3"
          key={casestudy}
        >
          {casestudy} <small className="ml-1">x</small>
        </span>
      ))}
    </div>
  )
}
