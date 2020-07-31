/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';
import { scoreboardListSelector } from '../scoreboard.selectors';
import * as actions from '../scoreboard.action';
import TableBody from './TableBody'

const Table = ({ scoreboardList, getScoreboardList }) => {
  useEffect(() => {
    getScoreboardList();
  }, []);

  const { direction } = useParams();
  let renderList = [];

  if (scoreboardList) {
    if (direction === 'arrival') {
      renderList = scoreboardList.arrival
        .map((item) => {
          return {
            ...item,
            city: item['airportFromID.city_en'],
            time: item.timeArrShedule
          };
        })
        .sort((a, b) => a.time - b.time)
    } else if (direction === 'departure') {
      renderList = scoreboardList.departure
        .map((item) => {
          return {
            ...item,
            city: item['airportToID.city_en'],
            time: item.timeArrShedule
          };
        })
        .sort((a, b) => a.time - b.time)
    }
  }

  const { search } = qs.parse(useLocation().search, { ignoreQueryPrefix: true });

  const searchedFlight = !search
    ? null
    : scoreboardList.departure.filter((flightItem) => {
      return flightItem.codeShareData[0].codeShare === search;
    });

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
      <TableBody renderList={renderList} searchedFlight={searchedFlight} />
    </table>
  )
}

const mapDispatch = {
  getScoreboardList: actions.getScoreboardList
}

const mapState = (state) => {
  return {
    scoreboardList: scoreboardListSelector(state)
  }
}
export default connect(mapState, mapDispatch)(Table)
