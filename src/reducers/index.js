import { combineReducers } from 'redux';
import recipeeReducer from './Recipee';
import restaurantReducer from './Restaurant';

export default combineReducers({
  recipeeReducer,
  restaurantReducer
});