import React from 'react'
import './FiltersSpettacoloDetail.css'

export default function FiltersSpettacoloDetail({ toggleShowMoreInfo }){
  return (
    <div className='FiltersSpettacoloDetail'>
      <div className='block-info-spettacolo'>
        <div className='title-spettacolo-filter'>
          La faticosa messainscena dell’Amleto di William Shakespeare
        </div>
        <div onClick={toggleShowMoreInfo} className='close-filters pointer'>
          <img alt='close filters' src={'/close-right-panel-button.svg'} />
        </div>
        <div className='label-filter-spettacolo'>Filtra il catalogo per:</div>
      </div>
      <div className='block-filters-detail-spettacolo'>
        <div className='filter-block mt-3'>
          <div className='filter-name'>
            data premiere
          </div>
          <div className='filter-body d-flex'>
            <div className='circle-filter'>
              12 Aprile 1967
            </div>
            <div className='circle-filter ml-2'>
              1967
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <div className='filter-name'>
            luogo
          </div>
          <div className='filter-body'>
            <div className='circle-filter'>
              Teatro alla Ringhiera
            </div>
            <div className='circle-filter'>
              Teatro la Pergola
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <div className='filter-name'>
            città
          </div>
          <div className='filter-body d-flex'>
            <div className='circle-filter'>
              Roma
            </div>
            <div className='circle-filter ml-2'>
              Firenze
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <div className='filter-name'>
            persona
          </div>
          <div className='filter-body'>
            <div className='circle-filter'>
              Leo De Berardinis
            </div>
            <div className='circle-filter'>
              Alberto Grifi
            </div>
            <div className='circle-filter'>
              Mario Masini
            </div>
            <div className='circle-filter'>
              Perla Peragallo
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
