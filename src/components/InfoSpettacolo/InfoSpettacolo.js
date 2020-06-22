import React, { useState } from 'react'
import classnames from 'classnames'
import './InfoSpettacolo.css'

const MicroFilter = ({ name, count }) => {
  return (
    <div className='item-micro-spettacolo mt-2 d-flex'>
      <div className='d-flex w-100 pointer justify-content-between align-items-center'>
        <div style={{ width: '80%'}}>{name}</div>
        <div>{count}</div>
      </div>
    </div>
  )
}

export default function InfoSpettacolo(){
  const [showMoreInfo,setShowMoreInfo] = useState(false)
  const [group,setGroup] = useState(null)

  const toggleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  return (
    <div className='block-left-spettacolo'>
      <div className='block-info-spettacolo'>
        <div className='title-spettacolo'>
          La faticosa messainscena dell’Amleto di William Shakespeare
        </div>
        <div className='mt-4 pointer more-info'>
          + Info
        </div>
        <div className='block-raggruppa'>
          <u>Raggruppa per</u>:
          <div
            onClick={() => setGroup('archivio')}
            className={classnames('item-group pointer',{
              'item-group-active': group === 'archivio'
            })}>
            Archivio
          </div>
          <div
            onClick={() => setGroup('tipologia')}
            className={classnames('item-group pointer',{
              'item-group-active': group === 'tipologia'
            })}>
            Tipologia
          </div>
        </div>
        {group &&
        <div className='filters-spettacolo'>
          <u>Filtra:</u>
          <div className='filter-active'>
            {group === 'archivio' ? 'Archivio' : 'Tipologia'}
          </div>
          {group === 'tipologia' &&
            <div className='mt-4'>
              <MicroFilter
                name='Fotogramma'
                count={8}
              />
              <MicroFilter
                name='Lettera'
                count={1}
              />
              <MicroFilter
                name='Riproduzione'
                count={1}
              />
              <MicroFilter
                name='Tessera associativa'
                count={1}
              />
            </div>
          }
          {group === 'archivio' &&
            <div className='mt-4'>
              <MicroFilter
                name="Archivio dell'unione Culturale - Torino"
                count={1}
              />
              <MicroFilter
                name='Archivio privato Nico Garrone'
                count={2}
              />
              <MicroFilter
                name='Archivio Leo de Berardinis (Dipartimento delle Arti - UniBo)'
                count={8}
              />
            </div>
          }
        </div>
        }
      </div>
    </div>
  )
}
