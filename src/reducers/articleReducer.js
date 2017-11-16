const defaultState = {
  article: {}
}

const articleReducer = (state = defaultState, action) => {
  if (action.type === "ARTICLE") {
    // console.log(action.payload);
    return {...state, article: action.payload}
  }

  return state
}

export default articleReducer
