import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import movieReducer from '../reducers/movie';
import reducers from '../reducers/index';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
