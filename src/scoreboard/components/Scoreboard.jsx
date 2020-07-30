import React, { useEffect } from 'react'
import SearchInput from './SearchInput'
import './styles.scss'
import Navigation from './Navigation'
import Table from './Table'

const Scoreboard = () => {
  useEffect(() => {
  })
  return (
    <div className="wrapper-container">
      <h2 className="title">Search flight</h2>
      <SearchInput />
      <Navigation />
      <Table />
    </div>
  )
}

export default Scoreboard
