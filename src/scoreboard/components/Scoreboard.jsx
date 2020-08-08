import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import * as flightsActions from '../scoreboard.actions'
import SearchForm from './searchForm/SearchForm'
import FlightsTable from './flightsTable/FlightsTable'

function Scoreboard({ fetchFlightsList }) {
  useEffect(() => {
    const date = moment().format('DD-MM-YYYY')
    fetchFlightsList(date)
  }, [])

  return (
    <div className="wrapper">
      <h2 className="title">Search flight</h2>
      <SearchForm />
      <FlightsTable />
    </div>
  )
}

const mapDispatch = {
  fetchFlightsList: flightsActions.fetchFlightsList
}

Scoreboard.propTypes = {
  fetchFlightsList: PropTypes.func
}

Scoreboard.defaultProps = {
  fetchFlightsList: PropTypes.func
}

export default connect(null, mapDispatch)(Scoreboard)
