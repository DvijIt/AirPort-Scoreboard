import './SearchField.scss'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import qs from 'qs'
import PropTypes from 'prop-types'
import moment from 'moment'
import { dateSelector } from '../../scoreboard.selectors'

function SearchForm({ date }) {
  const [inputValue, setInputValue] = useState('')
  const location = useLocation()
  const history = useHistory()

  const handleSearch = (event) => {
    event.preventDefault()
    let dataQuery = {
      search: inputValue,
      date
    }
    let pathname = ''
    if (location.pathname === '/') {
      pathname = '/departures?'
    } else {
      dataQuery = {
        ...dataQuery,
        ...qs.parse(location.search, { ignoreQueryPrefix: true }),
        search: inputValue
      }
      pathname = `${location.pathname}?`
    }
    const queryString = qs.stringify(dataQuery)
    history.push(`${pathname}${queryString}`)
  }

  return (
    <div className="search-field">
      <h2 className="search-field__title">Search flight</h2>
      <form className="search-field__form" onSubmit={handleSearch}>
        <i className="material-icons search-field__icon">search</i>
        <input
          className="search-field__input"
          type="text"
          placeholder="Airline, destination or flight #"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit" className="search-field__btn">Search</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    date: dateSelector(state)
  }
}

SearchForm.propTypes = {
  date: PropTypes.string
}

SearchForm.defaultProps = {
  date: moment().format('YYYY-MM-DD')
}

export default connect(mapStateToProps)(SearchForm)
