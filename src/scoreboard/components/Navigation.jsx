import React from 'react'
import { NavLink } from 'react-router-dom';
import FlightLandSharpIcon from '@material-ui/icons/FlightLandSharp';
import FlightTakeoffSharpIcon from '@material-ui/icons/FlightTakeoffSharp';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink className="nav-link" to="/departure" activeClassName="active">
        <FlightTakeoffSharpIcon />
        departure
      </NavLink>
      <NavLink className="nav-link" to="/arrival" activeClassName="active">
        <FlightLandSharpIcon />
        arrival
      </NavLink>
    </nav>
  )
}

export default Navigation
