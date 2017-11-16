import { combineReducers } from 'redux'

import articlesReducer from './articlesReducer'
import articleReducer from './articleReducer'

const rootReducer = combineReducers({
  articlesReducer,
  articleReducer
})

export default rootReducer
