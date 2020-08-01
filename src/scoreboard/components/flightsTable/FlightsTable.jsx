import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FlightsList from '../flightsList/FlightsList'
import './FlightsTable.scss'
import Navigation from '../navigation/Navigation'

function FlightsTable() {
  return (
    <div className="flights-list">
      <Navigation />
      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">
          <thead className="flights-table__header">
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody>
            <Switch>
              <Route path="/:direction?">
                <FlightsList />
              </Route>
            </Switch>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FlightsTable
