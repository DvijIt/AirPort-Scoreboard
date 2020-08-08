import { createSelector } from 'reselect'
import moment from 'moment'

export const flightsListSelector = state => state.scoreboard.flightsList

export const dateSelector = state => state.scoreboard.date

export const searchTextSelector = state => state.scoreboard.searchText

const filterFlightsList = (flightsList, filterString, searchText) => {
  const today = moment().format('YYYY-MM-DD')
  return flightsList.filter(flight => {
    const dateOfDeparture = moment(flight[filterString]).format('YYYY-MM-DD')
    const fltNo = `${flight['carrierID.IATA']}${flight.fltNo}`
    if (searchText !== undefined) {
      return moment(today).isSame(dateOfDeparture)
      && fltNo.toLowerCase().includes(searchText.toLowerCase())
    }
    return moment(today).isSame(dateOfDeparture)
  })
}

export const departureFlightsListSelector = createSelector(
  [flightsListSelector, searchTextSelector],
  (flightsList, searchText) => {
    if (flightsList.length === 0) return flightsList
    if (searchText.length !== 0) {
      return filterFlightsList(flightsList.body.departure, 'timeDepShedule', searchText)
    }
    return filterFlightsList(flightsList.body.departure, 'timeDepShedule')
  }
)

export const arrivalFlightsListSelector = createSelector(
  [flightsListSelector, searchTextSelector],
  (flightsList, searchText) => {
    if (flightsList.length === 0) return flightsList
    if (searchText.length !== 0) {
      return filterFlightsList(flightsList.body.arrival, 'timeArrShedule', searchText)
    }
    return filterFlightsList(flightsList.body.arrival, 'timeArrShedule')
  }
)
