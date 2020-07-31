import React from 'react'
import './styles.scss'
import Table from './Table'
import Navigation from './Navigation'
import SearchForm from './SearchForm'

const Scoreboard = () => {
  return (
    <div className="wrapper-container">
      <h1 className="title">Search flight</h1>
      <SearchForm />
      <Navigation />
      <Table />
    </div>
  )
}

export default Scoreboard
