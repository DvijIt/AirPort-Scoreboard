import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import scoreboardReducer from './scoreboard/scoreboard.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  scoreboard: scoreboardReducer
})

const store = createStore(
  appReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
export default store
