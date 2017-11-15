import {
  SELECT_LOCATION
} from '../actions/LocationActions'

const defaultState = {
  lat: -6.260721,
  lng: 106.7810405
}

const LocationReducer = (state=defaultState, action) => {
  switch (action.type) {
    case: SELECT_LOCATION
      const lat = action.payload.lat
      const lng = action.payload.lng
      return {...state, lat, lng}
    default:
      return state
  }
}

export default LocationReducer
