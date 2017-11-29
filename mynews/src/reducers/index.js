import { combineReducers } from 'redux'

import NewsReducer from './News'

const rootReducer = combineReducers({
  News: NewsReducer,
})

export default rootReducer
