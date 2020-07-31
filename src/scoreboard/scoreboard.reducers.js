import { SCOREBOARD_LIST_RECIVED } from './scoreboard.action';

const initialState = {
  scoreboardLists: []
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCOREBOARD_LIST_RECIVED:
      return {
        ...state,
        scoreboardLists: action.payload.scoreBoardList
      };
    default:
      return state;
  }
};

export default boardReducer;
