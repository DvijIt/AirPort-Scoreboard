import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/departure">departure</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/arrival">arrival</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
