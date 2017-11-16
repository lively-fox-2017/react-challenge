import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

const loggerMiddleware = createLogger();

// Uncomment loggerMiddleware to turn on logging
const middlewares = applyMiddleware(
  thunkMiddleware,
  // loggerMiddleware
);

const store = createStore(
  reducer,
  middlewares
);

export default store;
