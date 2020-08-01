import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './FlightBody.scss'

function FlightBody({ localTime, timeStatus, term, fltNo, status, name, logoUrl, airportName }) {
  return (
    <tr>
      <td className="terminal-field">
        <span className={term === 'D' ? 'terminal blue' : 'terminal'}>{term}</span>
      </td>
      <td className="time-field">{moment(localTime).format('HH:mm')}</td>
      <td className="way-field"><span>{airportName}</span></td>
      <td className="status-field"><span>{`${status} at ${moment(timeStatus).format('HH:mm')}`}</span></td>
      <td className="company-name">
        <span className="logo">
          <img src={logoUrl} alt={name} />
          <span>{name}</span>
        </span>
      </td>
      <td className="flight-field"><span>{`${fltNo}`}</span></td>
    </tr>
  );
}

FlightBody.propTypes = {
  localTime: PropTypes.string,
  timeStatus: PropTypes.string,
  term: PropTypes.string,
  fltNo: PropTypes.string,
  status: PropTypes.string,
  name: PropTypes.string,
  logoUrl: PropTypes.string,
  airportName: PropTypes.string
}

FlightBody.defaultProps = {
  localTime: moment().format('HH:mm'),
  timeStatus: '',
  term: PropTypes.string,
  fltNo: PropTypes.string,
  status: PropTypes.string,
  name: PropTypes.string,
  logoUrl: PropTypes.string,
  airportName: PropTypes.string
}

export default FlightBody
