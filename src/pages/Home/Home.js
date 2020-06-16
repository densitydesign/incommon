import React, { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import './Home.css'

const ARCHIVIO = "sparagmos-archivio"
const SPETTACOLO = "ricomporre-uno-spettacolo"
const FORMA = "la-forma-della-comunita"
const LUOGHI = "tempi-e-luoghi"
const CATALOGO = "catalogo-dei-documenti"

export default function Home() {

  const [menuOpen,setMenuOpen] = useState(null)
  const [menuHover,setMenuHover] = useState(null)

  const toggleMenuOpen = (item) => {
    if(item === menuOpen){
      setMenuOpen(null)
    } else {
      setMenuOpen(item)
    }
    setMenuHover(null)
  }

  return (
    <div className='Home d-flex'>
      <div></div>
      <div className='block-left'>
        <div className='ml-3 mr-3 text-left'>
          <div className='mt-3'>
            <img src={'/logo.svg'} className='img-fluid'  alt='Incommon' />
          </div>
          <p className='mt-4 text-home' style={{ fontFamily: 'FormaDJRMicro'}}>
            INCOMMON. In praise of community.
            Shared creativity in arts and politics in Italy
            (1959-1979) is a research project funded by the
            European Research Council (ERC Starting
            Grant 2015) and hosted by IUAV, University of
            Venice.
          </p>
          <p className='text-home'>
            INCOMMON is meant to be the first study to
            systematically analyse the field of performing
            arts as resulting from the practice of
            commonality both theorized and experienced
            over the 1960s and the 1970s. In particular, the
            project is aimed to study the history of the
            ‘laboratory Italy’ as the place where artistic
            counterculture expressed by performing arts
            arose in a milieu characterized by a profound
            relation between philosophy, politics, and
            revolutionary practices.
          </p>
          <div className='credits d-flex justify-content-around'>
            <div>
              <img src='/europe-svg.svg' alt='Europe Flag' />
            </div>
            <div>
              <img src='/ERC.svg' alt='ERC' />
            </div>
            <div>
              <img src='/IUAV.svg' alt='IUAV' />
            </div>
            <div>
              <img src='/DENSITY.svg' alt='Density Design' />
            </div>
          </div>
        </div>
      </div>
      <div className='block-center'>
        <div className='menu'>
          <div
            onMouseEnter={() => setMenuHover(ARCHIVIO)}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen(ARCHIVIO)}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>Sparagmos dell’archivio</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === ARCHIVIO
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === ARCHIVIO &&
          <p className='item-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sagittis eu volutpat odio
            facilisis. Cras tincidunt lobortis feugiat vivamus at.
            Tempor nec feugiat nisl pretium fusce. Lectus magna
            fringilla urna porttitor. Placerat duis ultricies lacus
            sed turpis. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Sed libero enim sed
            faucibus turpis in eu mi. Tincidunt vitae semper quis
            lectus nulla at volutpat diam. Tortor consequat id
            porta nibh venenatis cras. Gravida arcu ac tortor
            dignissim convallis aenean et tortor.
            Faucibus scelerisque eleifend donec pretium.
          </p>
        }
          <div
            onMouseEnter={() => setMenuHover(SPETTACOLO)}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen(SPETTACOLO)}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>Ricomporre uno spettacolo</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === SPETTACOLO
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === SPETTACOLO &&
          <p className='item-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sagittis eu volutpat odio
            facilisis. Cras tincidunt lobortis feugiat vivamus at.
            Tempor nec feugiat nisl pretium fusce. Lectus magna
            fringilla urna porttitor. Placerat duis ultricies lacus
            sed turpis. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Sed libero enim sed
            faucibus turpis in eu mi. Tincidunt vitae semper quis
            lectus nulla at volutpat diam. Tortor consequat id
            porta nibh venenatis cras. Gravida arcu ac tortor
            dignissim convallis aenean et tortor.
            Faucibus scelerisque eleifend donec pretium.
          </p>
        }
          <div
            onMouseEnter={() => setMenuHover(FORMA)}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen(FORMA)}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>La forma della comunità</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === FORMA
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === FORMA &&
          <p className='item-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sagittis eu volutpat odio
            facilisis. Cras tincidunt lobortis feugiat vivamus at.
            Tempor nec feugiat nisl pretium fusce. Lectus magna
            fringilla urna porttitor. Placerat duis ultricies lacus
            sed turpis. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Sed libero enim sed
            faucibus turpis in eu mi. Tincidunt vitae semper quis
            lectus nulla at volutpat diam. Tortor consequat id
            porta nibh venenatis cras. Gravida arcu ac tortor
            dignissim convallis aenean et tortor.
            Faucibus scelerisque eleifend donec pretium.
          </p>
        }
          <div
            onMouseEnter={() => setMenuHover(LUOGHI)}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen(LUOGHI)}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>I tempi e i luoghi</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === LUOGHI
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === LUOGHI &&
          <p className='item-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sagittis eu volutpat odio
            facilisis. Cras tincidunt lobortis feugiat vivamus at.
            Tempor nec feugiat nisl pretium fusce. Lectus magna
            fringilla urna porttitor. Placerat duis ultricies lacus
            sed turpis. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Sed libero enim sed
            faucibus turpis in eu mi. Tincidunt vitae semper quis
            lectus nulla at volutpat diam. Tortor consequat id
            porta nibh venenatis cras. Gravida arcu ac tortor
            dignissim convallis aenean et tortor.
            Faucibus scelerisque eleifend donec pretium.
          </p>
        }
          <div
            onMouseEnter={() => setMenuHover(CATALOGO)}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen(CATALOGO)}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>Catalogo dei documenti</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === CATALOGO
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === CATALOGO &&
          <p className='item-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sagittis eu volutpat odio
            facilisis. Cras tincidunt lobortis feugiat vivamus at.
            Tempor nec feugiat nisl pretium fusce. Lectus magna
            fringilla urna porttitor. Placerat duis ultricies lacus
            sed turpis. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Sed libero enim sed
            faucibus turpis in eu mi. Tincidunt vitae semper quis
            lectus nulla at volutpat diam. Tortor consequat id
            porta nibh venenatis cras. Gravida arcu ac tortor
            dignissim convallis aenean et tortor.
            Faucibus scelerisque eleifend donec pretium.
          </p>
        }
        </div>
      </div>
      <div
        className='block-right  d-flex align-items-center justify-content-center'
        style={{ backgroundImage: menuOpen  ?
          `url('${menuOpen}.png')` :
          menuHover ?
          `url('${menuHover}.png')`
          : ''}}>
          {menuOpen &&
            <Link
              className='text-center explore-button pointer'
              to={`/${menuOpen}`}>
                  esplora
            </Link>
          }
      </div>
    </div>
  )
}
