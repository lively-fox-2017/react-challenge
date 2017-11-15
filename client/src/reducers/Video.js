const defaultState = {
  videos: [],
  term: '',
  selectedVideo: null
}

const VideoReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'LOADVIDEO':
      return {...state, videos: action.payload.video}
    case 'TERM':
      return {...state, term: action.payload.term}
    case 'SELECTED':
      return {...state, selectedVideo: action.payload.data}
    default:
      return state
  }
}

export default VideoReducer
