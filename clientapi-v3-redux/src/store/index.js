// require redux
import { createStore } from 'redux'
// import dari file index dari folder reducer
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer
);

export default store
