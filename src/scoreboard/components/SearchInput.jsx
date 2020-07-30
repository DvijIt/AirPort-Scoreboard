import React, { useState } from 'react'

const SearchInput = () => {
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className="search-container" onSubmit={handleSubmit}>
      <form className="searchFlightsForm">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Airline, destination or flight #"
        />
        <button type="submit">
          search
        </button>
      </form>
    </div>
  )
}

export default SearchInput
