import fetchFlights from './scoreboard.gateway'

export const FLIGHTS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'

export const flightsListRecieved = (flightsList, date) => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: { flightsList, date }
  }
}

export const setSearchText = text => {
  return {
    type: SET_SEARCH_TEXT,
    payload: text
  }
}

export const fetchFlightsList = date => {
  const thunkAction = async dispatch => {
    const flightsList = await fetchFlights(date)
    dispatch(flightsListRecieved(flightsList, date))
  };
  return thunkAction
}
