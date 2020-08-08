import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './FlightBody.scss'

function FlightBody({ data }) {
  const { getLocalTime, getTimeStatus, term, fltNo, status, name, logoUrl, airportName } = data
  const localTime = moment(getLocalTime).format('HH:mm')
  const timeStatus = moment(getTimeStatus).format('HH:mm')
  return (
    <tr>
      <td className="terminal-field">
        <span className={term === 'D' ? 'terminal blue' : 'terminal'}>{term}</span>
      </td>
      <td className="time-field">{localTime}</td>
      <td className="way-field"><span>{airportName}</span></td>
      <td className="status-field"><span>{`${status} at ${timeStatus}`}</span></td>
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
  data: PropTypes.shape({
    getLocalTime: PropTypes.string,
    getTimeStatus: PropTypes.string,
    term: PropTypes.string,
    fltNo: PropTypes.string,
    status: PropTypes.string,
    name: PropTypes.string,
    logoUrl: PropTypes.string,
    airportName: PropTypes.string
  })
}

FlightBody.defaultProps = {
  data: {
    getLocalTime: moment().format('HH:mm'),
    getTimeStatus: '',
    term: '',
    fltNo: '',
    status: '',
    name: '',
    logoUrl: '',
    airportName: ''
  }
}

export default FlightBody
