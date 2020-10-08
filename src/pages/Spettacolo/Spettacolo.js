import React from 'react'
import { Link } from 'react-router-dom'
import MenuTop from '../../components/MenuTop'
import './Spettacolo.css'

export default function Spettacolo(){
  return (
    <div className='Spettacolo'>
      <MenuTop />
        <div className='container-fluid page'>
          <div className='row mt-3'>
            <div className='col-md-4'>
              <Link className='link-spettacolo' to={'/ricomporre-uno-spettacolo/1'}>
                <div className='item-spettacolo' style={{ backgroundImage: 'url(/spettacolo/A-charlie-parker.png)'}}>
                  <div className='info-documento d-flex justify-content-between'>
                    <div className='num_documenti'>100 doc.</div>
                    <div className='data_documenti'>1970</div>
                  </div>
                  <div className='titolo-spettacolo'>
                    A Charlie<br />Parker
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-md-4'>
              <div className='item-spettacolo' style={{ backgroundImage: 'url(/spettacolo/Aspettando-godot.png)'}}>
                <div className='info-documento d-flex justify-content-between'>
                  <div className='num_documenti'>100 doc.</div>
                  <div className='data_documenti'>1965</div>
                </div>
                <div className='titolo-spettacolo'>
                  Aspettando<br />Godot
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='item-spettacolo' style={{ backgroundImage: 'url(/spettacolo/Atto-senza-parole-II.png)'}}>
                <div className='info-documento d-flex justify-content-between'>
                  <div className='num_documenti'>100 doc.</div>
                  <div className='data_documenti'>1965</div>
                </div>
                <div className='titolo-spettacolo'>
                  Atto senza<br />Parole II
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
