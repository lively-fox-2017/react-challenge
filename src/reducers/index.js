import { combineReducers } from 'redux'

import LocationReducer from './LocationReducer'
import StopsReducer from './StopsReducer'

export const rootReducer = combineReducers({
  LocationReducer,
  StopsReducer
})
