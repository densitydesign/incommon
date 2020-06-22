import React, { useState } from 'react'
import classnames from 'classnames'
import './FiltersDocumentDetail.css'

export default function FiltersDocumentDetail(){
  const [showMoreInfo,setShowMoreInfo] = useState(false)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  return (
    <div className='block-left-detail position-relative'>
      <div className='block-info-document position-sticky' >
        <div className='title-document'>
          Materiali prima stesura "Scontri generali permanenti"
        </div>
        <div className='description-document'>
          Cartellina con 15 fogli manoscritti con note e frammenti per il testo di "Scontri generali permanenti".
        </div>
        <div className='info-box'>
          <div onClick={() => toggleShowMoreInfo(true)} className='pointer'>
            informazioni supplementari
            <span>
              <img className={classnames('ml-2',{
              'rotate-show-hide': showMoreInfo
            })} src={'/hide-show-black.svg'} alt='Show Hide' />
            </span>
          </div>
          {showMoreInfo &&
          <div className='mt-4'>
            <div>
              <span>id</span>
              <span className='ml-5 text-red'>SB0004</span>
            </div>
            <div className='mt-2'>
              <span>diritti</span>
              <span className='ml-5 text-red'></span>
            </div>
            <div className='mt-2'>
              <span>referente</span>
              <span className='ml-5 text-red'>Baravalle, M.</span>
            </div>
            <div className='mt-3'>
              informazioni sui diritti del documento
              <div className='text-red mt-1'>
                Archivio Privato Giuliano Scabia, Firenze - Giuliano Scabia
              </div>
            </div>
          </div>
          }
        </div>
      </div>
      <div className='block-filters-detail overflow-scroll'>
        <div className='label-filter'>Filtra il catalogo per:</div>
        <div className='filter-block mt-3'>
          <div className='filter-name'>
            spettacolo
          </div>
          <div className='filter-body'>
            <div className='circle-filter'>
              Scontri Generali
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <div className='filter-name'>
            luogo
          </div>
          <div className='filter-body'>
            <div className='circle-filter'>
              XXX Festival Internazionale della Prosa
            </div>
            <div className='circle-filter'>
              Mestre
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <div className='filter-name'>
            data
          </div>
          <div className='filter-body'>
            <div className='circle-filter'>
              07-10-1971
            </div>
            <div className='circle-filter'>
              Ottobre 1971
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <div className='filter-name'>
            tipologia
          </div>
          <div className='filter-body'>
            <div className='circle-filter'>
              manoscritto
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <div className='filter-name'>
            provenienza
          </div>
          <div className='filter-body'>
            <div className='circle-filter'>
              Archivio Privato Giuliano Scabia
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <div className='filter-name'>
            creatore del documento
          </div>
          <div className='filter-body'>
            <div className='circle-filter'>
              Giuliano Scabia
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
