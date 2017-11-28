const defaultState = {
  loader: true
}

const MyWeather = (state=defaultState, action) => {
  switch (action.type) {
    case 'ToggleLoader':
      return {...state, loader:action.payload.loader}
    default:
      return state
  }
}

export default MyWeather
