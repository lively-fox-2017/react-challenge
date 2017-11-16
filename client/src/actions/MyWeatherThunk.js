import axios from 'axios'

export const GetMyWeather = (weather) => {
  return {
    type: 'GetMyWeather',
    payload: {
      weather
    }
  }
}

export const fetchLocation = () => {
  return (dispatch, state) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + pos.coords.latitude.toString() + '&lon=' + pos.coords.longitude.toString() + '&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
        return dispatch(GetMyWeather(data.data))
      }).catch((err) => {
        console.log(err)
      })
    })
  }
}

export const fetchByCity = (city) => {
  return (dispatch, state) => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
      return dispatch(GetMyWeather(data.data))
    }).catch((err) => {
      console.log(err)
    })
  }
}
