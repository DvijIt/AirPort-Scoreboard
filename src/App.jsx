import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Scoreboard from './scoreboard/components/Scoreboard'
import store from './store'

const App = () => {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/:direction?/:flight?">
            <Scoreboard />
          </Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App
