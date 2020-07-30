import moment from 'moment'

const baseUrl = 'https://api.iev.aero/api/flights'
const date = moment(new Date()).format('DD-MM-YYYY')

export const fetchFligth = async () => {
  const response = await fetch(`${baseUrl}/${date}`)
  if (response.status === 200) {
    return response.json()
  }
  throw new Error('Failed to load data');
};

export const searchFlight = async () => {
  const response = await fetch(`${baseUrl}/${date}/`)
  if (response.status === 200) {
    return response.json()
  }
  throw new Error('Failed to load data');
};
