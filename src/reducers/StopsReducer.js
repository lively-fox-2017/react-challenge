import {
  RECIEVE_NEARBY_STOPS
} from '../actions/StopsActions'

const defaultState = {
  stops: []
}

const StopsReducer = (state=defaultState, action) => {
  switch (action.type) {
    case RECIEVE_NEARBY_STOPS:
      return {...state, stops: action.payload.stops}
    default:
      return state
  }
}

export default StopsReducer
