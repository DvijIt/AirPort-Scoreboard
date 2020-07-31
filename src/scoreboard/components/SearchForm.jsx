import React, { useState, useEffect } from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp'
import { useHistory, useLocation, useParams, Link } from 'react-router-dom'
import { grey } from '@material-ui/core/colors';

const SearchForm = () => {
  const [value, setValue] = useState('')
  const history = useHistory()
  const location = useLocation()
  const { flight, direction } = useParams()
  useEffect(() => {
    if (value) {
      history.push(`${location.pathname}/${value}`)
      setValue('')
    }
    if (flight) {
      setValue(flight)
      setValue('')
    }
  }, [direction]);

  const handleChange = event => {
    setValue(event.target.value)
  };

  return (
    <section className="search-container">
      <form className="searchFlightsForm">
        <div className="search__input">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Airline, destination or flight #"
          />
          <SearchSharpIcon className="search__input-icon" style={{ color: grey }} />
        </div>
        <button type="submit">
          <Link to={`/departure?search=${value}`}>Search</Link>
        </button>
      </form>
    </section>
  );
};

export default SearchForm
