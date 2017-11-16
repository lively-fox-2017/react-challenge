import { createStore } from 'redux'
// import listVideo from '../reducers/listVideoReducer'
import listVideo from '../reducers'

const store = createStore(listVideo)

export default store
