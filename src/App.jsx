import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Scoreboard from './scoreboard/components/Scoreboard'

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path="/:direction?/:flight?">
            <Scoreboard />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
