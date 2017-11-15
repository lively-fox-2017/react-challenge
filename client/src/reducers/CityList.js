const defaultState = {
  weathers: [
    {
      name: '',
      main: {
        temp: '',
        humidity: ''
      },
      wind: {
        speed: ''
      },
      weather: [{}]
    }
  ]
}

const CityList = (state=defaultState, action) => {
  switch (action.type) {
    case 'GetCityList':
      return {...state, weathers: action.payload.weathers}
    default :
      return state
  }
}

export default CityList
