const baseUrl = 'https://api.iev.aero/api/flights';

const fetchFlights = async date => {
  const responce = await fetch(`${baseUrl}/${date}`);
  if (responce.ok) return responce.json();
  throw new Error(`Could not fetch, received ${responce.status}`);
}

export default fetchFlights
