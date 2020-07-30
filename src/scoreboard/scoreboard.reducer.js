import * as actionTypes from './scoreboard.types'

const initState = {
  fligthList: {}
}

const scoreboardReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SCOREBOARD_LIST_RECIVED: {
      return {
        ...state,
        fligthList: action.payload.fligthList
      }
    }
    default:
      return state
  }
}

export default scoreboardReducer
