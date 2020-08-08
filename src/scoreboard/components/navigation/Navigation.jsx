import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  return (
    <div className="flights-list__switcher">
      <NavLink
        to={`/departures${location.search}`}
        className="flights-list__btn flights-list__btn_departures"
        activeClassName="active"
        isActive={() => {
          const { pathname } = location
          return pathname === '/' || pathname === '/departures'
        }}
      >
        <i className="material-icons">flight_takeoff</i>
        Departures
      </NavLink>
      <NavLink
        to={`/arrivals${location.search}`}
        className="flights-list__btn flights-list__btn_arrivals"
        activeClassName="active"
      >
        <i className="material-icons">flight_land</i>
        Arrivals
      </NavLink>
    </div>
  )
}

export default Navigation
