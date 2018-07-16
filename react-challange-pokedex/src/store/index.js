import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/index'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger, ReduxThunk)
    )
)

export default store