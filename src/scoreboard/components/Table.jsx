import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom'
import TableBody from './TableBody'
import { fligthDepartureListSelector } from '../scoreboard.selectors';
import * as scoreboardActions from '../scoreboard.actions'

const Table = ({ getFligthList, fligthList}) => {
  useEffect(() => {
    getFligthList()
    console.log(fligthList)
  }, [])
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

Table.propTypes = {
  getFligthList: PropTypes.func
  // fligthList: PropTypes.array
}

Table.defaultProps = {
  getFligthList: PropTypes.func
  // fligthList: PropTypes.array
}

const mapState = state => {
  return {
    fligthList: fligthDepartureListSelector(state)
  }
}

const mapDispatch = {
  getFligthList: scoreboardActions.getFligthList
}

export default connect(mapState, mapDispatch)(Table)
