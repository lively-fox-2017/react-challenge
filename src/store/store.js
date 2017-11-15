import { createStore } from 'redux';
import movieReducer from '../reducers/movie';

let store = createStore(movieReducer);

export default store;
