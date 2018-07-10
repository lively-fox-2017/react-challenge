import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'

export const GET_NEWS = 'GET_NEWS'
export const GET_PHOTO = 'GET_PHOTO'
loadProgressBar()
export const getNews = news => {
  return {
    type: GET_NEWS,
    news
  }
}
export const getPhoto = photo => {
  return {
    type: GET_PHOTO,
    photo
  }
}
export const newsFormAPI = () => {
  return (dispatch, getState) => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef'
    axios.get(url).then( response => {
      dispatch(getNews(response.data))
    })
  }
}
export const allPhotoFromAPI = () => {
  return (dispatch, getState) => {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef'
    axios.get(url).then( response => {
      dispatch(getPhoto(response.data.photos))
    })
  }
}