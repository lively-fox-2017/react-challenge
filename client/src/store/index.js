import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import listVideo from '../reducers'

const store = createStore(listVideo, applyMiddleware(thunk))

export default store
