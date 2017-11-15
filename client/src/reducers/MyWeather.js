const defaultState = {
  weather: {
    name: 'Still Waiting...',
    main: {
      temp: '',
      humidity: ''
    },
    wind: {
      speed: ''
    },
    weather: [{}]
  }
}

const MyWeather = (state=defaultState, action) => {
  switch (action.type) {
    case 'GetMyWeather':
      return {...state, weather:action.payload.weather}
    default:
      return state
  }
}

export default MyWeather
