import classNames from 'classnames'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './MenuTop.css'

export default function MenuTop({
  setPanelInfo,
  panelInfo = false,
  fixed = false,
}) {
  return (
    <div
      className={classNames(
        'menu-top d-flex justify-content-between align-items-center',
        {
          'position-fixed': fixed,
          'top-0': fixed,
          'left-0': fixed,
          'right-0': fixed,
        }
      )}
    >
      <div className="d-flex align-items-center">
        <div>
          <Link to={'/'}>
            <img src="/in-common.svg" alt="INCOMMON" height="57" />
          </Link>
        </div>
        <div>
          <NavLink
            activeClassName="item-menu-top-active"
            className="item-menu-top item-menu-top-1"
            to="/performance-remains"
          >
            Performance Remains
          </NavLink>
          <NavLink
            activeClassName="item-menu-top-active"
            className="item-menu-top item-menu-top-2"
            to="/recomposition"
          >
            Recomposition
          </NavLink>
          <NavLink
            activeClassName="item-menu-top-active"
            className="item-menu-top item-menu-top-3"
            to="/the-shape-of-community"
          >
            The Shape of Community
          </NavLink>
          <NavLink
            activeClassName="item-menu-top-active"
            className="item-menu-top item-menu-top-4"
            to="/times-and-places"
          >
            Times and Places
          </NavLink>
          <NavLink
            activeClassName="item-menu-top-active"
            className="item-menu-top item-menu-top-5"
            to="/catalogue"
          >
            Catalogue
          </NavLink>
        </div>
      </div>
      <div className="panel-info-icon" onClick={() => setPanelInfo(!panelInfo)}>
        {panelInfo ? (
          <img src="/close-document.svg" alt="close" />
        ) : (
          <img src="/open-right-panel-button.svg" alt="Info Panel" />
        )}
      </div>
    </div>
  )
}
