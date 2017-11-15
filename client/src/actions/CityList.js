export const GetCityList = (weathers) => {
  return {
    type: 'GetCityList',
    payload: {
      weathers
    }
  }
}
