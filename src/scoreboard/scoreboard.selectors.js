import { createSelector } from 'reselect'

export const fligthDepartureListSelector = state => state.scoreboard.fligthList

export const fligthArrivalListSelector = state => {
  return state.scoreboard.fligthList.arrival
}

export const selectedfligthListSelector = createSelector(
  [fligthDepartureListSelector],
  (fligthList) => {
    return fligthList
  }
);
