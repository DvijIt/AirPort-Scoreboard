import { fetchFligth } from './croreboard.gateways';
import * as actionTypes from './scoreboard.types'

export const scoreboardListRecieved = (fligthList) => {
  const action = {
    type: actionTypes.SCOREBOARD_LIST_RECIVED,
    payload: {
      fligthList
    }
  };
  return action;
};

export const getFligthList = () => {
  const thunkAction = async dispatch => {
    const fligthList = await fetchFligth()
    console.log(fligthList);
    return dispatch(scoreboardListRecieved(fligthList.body))
  };
  return thunkAction;
};
