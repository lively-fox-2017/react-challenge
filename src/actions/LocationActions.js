export const SELECT_LOCATION = 'SELECT_LOCATION'
export const selectLocation = (lat, lng) => {
  return {
    type: SELECT_LOCATION,
    payload: {
      lat,
      lng
    }
  }
}
