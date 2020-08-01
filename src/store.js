import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import scoreboardReducer from './scoreboard/scoreboard.reducer'

const reducers = combineReducers({
  scoreboard: scoreboardReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store
