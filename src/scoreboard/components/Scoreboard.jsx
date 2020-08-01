import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as flightsActions from '../scoreboard.actions'
import SearchForm from './searchForm/SearchForm'
import FlightsSchedule from './flightsTable/FlightsTable'

function SearchFlightsPage({ fetchFlightsList }) {
  useEffect(() => {
    const date = moment().format('DD-MM-YYYY')
    fetchFlightsList(date)
  }, []);

  return (
    <div className="wrapper">
      <SearchForm />
      <FlightsSchedule />
    </div>
  );
}

const mapDispatchToProps = {
  fetchFlightsList: flightsActions.fetchFlightsList
};

export default connect(null, mapDispatchToProps)(SearchFlightsPage)
