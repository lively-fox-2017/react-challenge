import { createStore } from 'redux'
import articles from '../reducers'

const store = createStore(articles)

export default store
