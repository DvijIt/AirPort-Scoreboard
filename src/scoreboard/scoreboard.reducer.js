import { FLIGHTS_LIST_RECIEVED } from './scoreboard.actions'

const initialState = {
  flightsList: [],
  date: null
}

const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightsList: action.payload.flightsList,
        date: action.payload.date
      }
    default: return state
  }
}

export default scoreboardReducer
