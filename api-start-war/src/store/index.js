import { createStore } from 'redux'
import heroReducer from '../reducers/heroReducer'

const store = createStore(
  heroReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
