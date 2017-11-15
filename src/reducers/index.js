import { combineReducers } from 'redux';
import heroReducer from './heroReducer';

const reducer = combineReducers({
  heroReducer,
});

export default reducer;
