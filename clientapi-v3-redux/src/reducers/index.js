import { combineReducers } from 'redux'

const statenews = {
  news: [],
  newsmtv: [],
  satuan: []
}

const nama = (state = statenews, actions) => {
  switch (actions.type) {
    case 'NEWS':
      return {...state, news: actions.payload}
      // return {...state, news: [...state.news,actions.payload]}
    case 'NEWSMTV':
      return {...state, newsmtv: actions.payload}
      // return {...state, newsmtv: [...state.newsmtv,actions.payload]}
    default:
      return state
  }
}

export default nama
