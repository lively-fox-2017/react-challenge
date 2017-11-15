export const GET_NEWS = 'GET_NEWS'
export const GET_PHOTO = 'GET_PHOTO'
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