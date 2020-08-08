import './SearchForm.scss'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import qs from 'qs'
import PropTypes from 'prop-types'
import moment from 'moment'
import * as scoreboardActions from '../../scoreboard.actions'
import { dateSelector } from '../../scoreboard.selectors'

function SearchForm({ date, setSearchText }) {
  const [value, setValue] = useState('')
  const location = useLocation()
  const history = useHistory()

  const search = qs.parse(location.search, { ignoreQueryPrefix: true })
  useEffect(() => {
    setSearchText(search.search || '')
  })

  const handleSearch = event => {
    event.preventDefault()
    let dataQuery = {
      search: value,
      date
    }
    let pathname = ''
    if (location.pathname === '/') {
      pathname = '/departures?'
    } else {
      dataQuery = {
        ...dataQuery,
        ...qs.parse(location.search, { ignoreQueryPrefix: true }),
        search: value
      }
      pathname = `${location.pathname}?`
    }
    const queryString = qs.stringify(dataQuery)
    history.push(`${pathname}${queryString}`)
    setSearchText(dataQuery.search)
  }

  return (
    <div className="search-field">
      <form className="search-field__form" onSubmit={handleSearch}>
        <i className="material-icons search-field__icon">search</i>
        <input
          className="search-field__input"
          type="text"
          placeholder="Airline, destination or flight #"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit" className="search-field__btn">Search</button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  date: PropTypes.string,
  setSearchText: PropTypes.func
}

SearchForm.defaultProps = {
  date: moment().format('YYYY-MM-DD'),
  setSearchText: PropTypes.func
}

const mapState = state => {
  return {
    date: dateSelector(state),
  }
}

const mapDispatch = {
  setSearchText: scoreboardActions.setSearchText
}

export default connect(mapState, mapDispatch)(SearchForm)
