import React from 'react'
import { Switch } from 'react-router-dom'
import TableBody from './TableBody'

const Table = () => {
  return (
    <table className="scoreboard__table">
      <thead className="scoreboard__header">
        <tr>
          <th>Terminal</th>
          <th>Schedule</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
        </tr>
      </thead>
      <Switch>
        <TableBody />
      </Switch>
    </table>
  )
}

export default Table
