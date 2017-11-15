import http from 'axios'

export const REQUEST_NEARBY_STOPS = 'REQUEST_NEARBY_STOPS'
const requestNearbyStops = () => {
  return {
    type: REQUEST_NEARBY_STOPS
  }
}

export const RECIEVE_NEARBY_STOPS = 'RECIEVE_NEARBY_STOPS'
const recieveNearbyStops = (stops) => {
  return {
    type: RECIEVE_NEARBY_STOPS,
    payload: {
      stops
    }
  }
}

export const fetchNearbyStops = (lat, lng) => {
  return dispatch => {
    dispatch(requestNearbyStops())

    return http.get(`http://api-ext.trafi.com/stops/nearby?lat=${lat}&lng=${lng}&api_key=${process.env.REACT_APP_TRAFISECRET}`)
      .then(({data}) => {
        dispatch(recieveNearbyStops(data.Stops))
      })
      .catch(reason => {
        console.error(reason)
      })
  }
}
