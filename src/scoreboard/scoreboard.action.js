import fetchFligth from './scoreboard.gateway';

export const SCOREBOARD_LIST_RECIVED = 'BOARD_LIST_RECIVED';

export const boardListRecived = (scoreBoardList) => {
  const action = {
    type: SCOREBOARD_LIST_RECIVED,
    payload: {
      scoreBoardList
    }
  };
  return action;
};

export const getScoreboardList = () => {
  const thunkAction = async dispatch => {
    const scoreboardList = await fetchFligth()
    dispatch(boardListRecived(scoreboardList));
  };
  return thunkAction;
};
