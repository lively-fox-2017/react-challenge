import { createStore, applyMiddleware } from 'redux'
import heroReducer from '../reducers/heroReducer'
import thunk from 'redux-thunk'

const store = createStore(
  heroReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store
