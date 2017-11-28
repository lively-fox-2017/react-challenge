import axios from 'axios'

export const GetCityList = (weathers) => {
  return {
    type: 'GetCityList',
    payload: {
      weathers
    }
  }
}

export const fetchCityListApi = () => {
  return (dispatch, state) => {
    axios.get('http://api.openweathermap.org/data/2.5/box/city?bbox=92.460937,-10.919618,141.152344,8.494105&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
      return dispatch(GetCityList(data.data.list))
    }).catch((err) => {
      console.log(err);
    })
  }
}
