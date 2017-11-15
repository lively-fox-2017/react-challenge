import {
  REQUEST_NEARBY_STOPS,
  RECIEVE_NEARBY_STOPS
} from '../actions/StopsActions'

const defaultState = {
  isFetching: false,
  stops: []
}

const StopsReducer = (state=defaultState, action) => {
  switch (action.type) {
    case REQUEST_NEARBY_STOPS:
      return {...state, isFetching: true}
    case RECIEVE_NEARBY_STOPS:
      return {...state, isFetching: false, stops: action.payload.stops}
    default
      return state
  }
}

export default StopsReducer
