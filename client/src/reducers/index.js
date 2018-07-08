import { combineReducers } from 'redux'

import VideoReducer from './Video'

const rootReducer = combineReducers({
  video: VideoReducer
})

export default rootReducer
