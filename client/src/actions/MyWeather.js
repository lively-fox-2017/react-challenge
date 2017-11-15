export const GetMyWeather = (weather) => {
  return {
    type: 'GetMyWeather',
    payload: {
      weather
    }
  }
}
