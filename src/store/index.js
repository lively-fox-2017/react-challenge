import { createStore, applyMiddleware, compose } from 'redux'
import articles from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk, logger)
const enhancer = devtools(
  middleware
)

const store = createStore(articles, enhancer)

export default store
