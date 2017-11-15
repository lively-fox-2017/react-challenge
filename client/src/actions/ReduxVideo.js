export const video = (video) => {
  // console.log('masuk kata pak iyan', video)
  return {
    type: 'LOADVIDEO',
    payload: {
      video
    }
  }
}

export const term = (term) => {
  // console.log('masuk kata pak iyan term', term)
  return {
    type: 'TERM',
    payload: {
      term
    }
  }
}

export const selectedVideo = (data) => {
  return {
    type: 'SELECTED',
    payload: {
      data
    }
  }
}
