const stateListVideo = {
  listVideo: [],
  param: '',
  // listVideoSearches:[]
}

const listVideoReducer = (state = stateListVideo, action) => {
  // console.log('listVideoReducer.type', action.type);
  switch (action.type) {
    case 'fetchAll':
      return {
        ...state, listVideo: action.payload.listVideo
      }
    case 'param_change':
      return {
        ...state, param: action.payload.param
      }
    default:
      return state
  }
}

export default listVideoReducer
