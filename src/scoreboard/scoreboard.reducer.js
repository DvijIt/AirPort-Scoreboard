import { FLIGHTS_LIST_RECIEVED, SET_SEARCH_TEXT } from './scoreboard.actions'

const initialState = {
  flightsList: [],
  date: null,
  searchText: ''
}

const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightsList: action.payload.flightsList,
        date: action.payload.date
      }
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      }
    default:
      return state
  }
}

export default scoreboardReducer
