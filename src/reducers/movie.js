import { combineReducers } from 'redux';
import { movie } from '../actions/movie';

const defaultState = {
  title:  '',
  actors: '',
  director: '',
  genre: '',
  poster: '',
  released: '',
};

function movieReducer(state=defaultState, action) {
  switch(action.type) {
    case 'UPDATE_DATA':
      return action.state;
  }
  return state;
}

export default combineReducers({ movieReducer })
