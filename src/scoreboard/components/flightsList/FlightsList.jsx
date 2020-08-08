import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import { departureFlightsListSelector, arrivalFlightsListSelector } from '../../scoreboard.selectors'
import * as flightsActions from '../../scoreboard.actions'
import FlightBody from '../flightbody/FlightBody'

const FlightsList = ({ departureFlightsList, arrivalFlightsList }) => {
  const [flightsList, setFlightsList] = useState([])
  const { direction } = useParams()
  const location = useLocation()

  useEffect(() => {
    if (direction === 'arrivals') {
      setFlightsList(arrivalFlightsList)
    } else {
      setFlightsList(departureFlightsList)
    }
  }, [location, departureFlightsList, arrivalFlightsList])

  return flightsList.map(flight => {
    let data = {
      term: flight.term,
      fltNo: `${flight['carrierID.IATA']}${flight.fltNo}`,
      airportName: flight['airportToID.name_en'] || flight['airportFromID.name_en'],
      getLocalTime: flight.timeDepShedule,
      getTimeStatus: flight.timeTakeofFact,
      status: flight.status,
      name: flight.airline.en.name,
      logoUrl: flight.airline.en.logoSmallName
    }
    if (direction === 'arrivals') {
      data = {
        ...data,
        getLocalTime: flight.timeToStand,
        getTimeStatus: flight.timeLandFact
      }
    }
    return (
      <FlightBody key={flight.ID} data={data} />
    )
  })
}

const mapState = state => {
  return {
    departureFlightsList: departureFlightsListSelector(state),
    arrivalFlightsList: arrivalFlightsListSelector(state)
  }
}

const mapDispatch = {
  getFlightsList: flightsActions.fetchFlightsList
}

export default connect(mapState, mapDispatch)(FlightsList)
