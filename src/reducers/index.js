import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import matchReducer from './matchReducer';

const reducer = combineReducers({
  heroReducer,
  matchReducer,
});

export default reducer;
