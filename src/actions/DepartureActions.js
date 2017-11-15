import axios from 'axios'

export const RECIEVE_DEPARTURE = 'RECIEVE_DEPARTURE'
export const recieveDeparture = (schedules) => {
  return {
    type: RECIEVE_DEPARTURE,
    payload: {
      schedules
    }
  }
}

export const fetchDeparture = (stopId) => {
  return dispatch => {
    axios.get(`http://api-ext.trafi.com/departures?stop_id=${stopId}&region=jakarta&api_key=${process.env.REACT_APP_TRAFISECRET}`)
      .then(({data}) => {
        dispatch(recieveDeparture(data.Schedules))
      })
      .catch(reason => {
        console.error(reason)
      })
  }
}
