const defaultState = {
  news: []
}

const articlesReducer = (state = defaultState, action) => {
  if (action.type === "ARTICLES" && action.payload !== undefined) {
    // console.log(action.payload);
    return {...state, news: action.payload}
  }

  return state
}

export default articlesReducer
