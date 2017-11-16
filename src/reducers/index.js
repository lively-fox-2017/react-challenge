import { combineReducers } from 'redux';
import movieReducer from './movie';
import quoteGenerator from './quoteGenerator';

export default combineReducers({
  movieReducer,
  quoteGenerator,
})
