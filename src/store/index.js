import { createStore, applyMiddleware } from 'redux'
import articles from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)

const store = createStore(articles, middleware)

export default store
