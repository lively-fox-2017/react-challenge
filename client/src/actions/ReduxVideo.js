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
  return {
    type: 'TERM',
    payload: {
      term
    }
  }
}

export const selectedVideo = (data) => {
  // console.log('masuk kata pak iyan data', data.id.videoId)
  return {
    type: 'SELECTED',
    payload: {
      data
    }
  }
}
