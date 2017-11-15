import { GET_NEWS } from '../actions/nasa'
import { GET_PHOTO } from '../actions/nasa'
import { combineReducers } from 'redux'

const nasaAPI = (state = [], action) => {
  switch (action.type) {
    case GET_NEWS:
      return [...state, {news:action.news}]
    case GET_PHOTO:
      let photos = []
      for(let i=0;i <= 10;i++){
        photos.push(action.photo[i])
      }
      return photos
    default:
      return state
  }
}
const nasaAPP = combineReducers({ nasaAPI })
export default nasaAPP