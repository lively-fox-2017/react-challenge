export const updateNews = (params) => {
  // console.log(JSON.stringify(params))
  return {
    type: 'NEWS',
    payload: params
  }
}

export const updateNewsmtv = (params) => {
  // console.log(JSON.stringify(params))
  return {
    type: 'NEWSMTV',
    payload: params
  }
}
