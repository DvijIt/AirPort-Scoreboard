import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';
const date = moment(new Date()).format('DD-MM-YYYY');

const fetchFligth = async () => {
  const response = await fetch(`${baseUrl}/${date}`)
  if (response.status === 200) {
    return response.json()
  }
  throw new Error('Failed to load data')
}

export default fetchFligth
