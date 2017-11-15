import { combineReducers } from 'redux'

import LocationReducer from './LocationReducer'
import StopsReducer from './StopsReducer'
import DepartureReducer from './DepartureReducer'

export const rootReducer = combineReducers({
  LocationReducer,
  StopsReducer,
  DepartureReducer
})
