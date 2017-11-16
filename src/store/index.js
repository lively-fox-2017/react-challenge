import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
);

const store = createStore(
  reducer,
  composeEnhancers(middlewares)
);

export default store;
