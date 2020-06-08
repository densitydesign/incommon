import React, { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

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
            <img src={'/logo.svg'} alt='Incommon' />
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
            onMouseEnter={() => setMenuHover('archivio')}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen('archivio')}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>Sparagmos dell’archivio</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === 'archivio'
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === 'archivio' &&
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
            onMouseEnter={() => setMenuHover('spettacolo')}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen('spettacolo')}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>Ricomporre uno spettacolo</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === 'spettacolo'
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === 'spettacolo' &&
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
            onMouseEnter={() => setMenuHover('forma')}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen('forma')}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>La forma della comunità</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === 'forma'
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === 'forma' &&
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
            onMouseEnter={() => setMenuHover('luoghi')}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen('luoghi')}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>I tempi e i luoghi</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === 'luoghi'
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === 'luoghi' &&
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
            onMouseEnter={() => setMenuHover('catalogo')}
            onMouseLeave={() => setMenuHover(null)}
            onClick={() => toggleMenuOpen('catalogo')}
            className='pointer item-menu'
          >
            <div className='d-flex justify-content-between'>
              <span>Catalogo dei documenti</span>
              <span className={classnames({
                'rotate-show-hide': menuOpen === 'catalogo'
              })}><img src={'/show-hide.svg'} alt='Show Hide' /></span>
            </div>
          </div>
          {menuOpen === 'catalogo' &&
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
        className='block-right'
        style={{ backgroundImage: menuOpen  ?
          `url('${menuOpen}.png')` :
          menuHover ?
          `url('${menuHover}.png')`
          : ''}}>
          {menuOpen &&
            <Link
              className='text-center explore-button d-flex justify-content-center pointer'
              to={'/about'}>
                <img src={'/esplora.svg'} alt={menuOpen} />
            </Link>
          }
      </div>
    </div>
  )
}
