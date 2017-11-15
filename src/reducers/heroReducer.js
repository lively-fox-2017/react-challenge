const initialState = {
  heroes: [],
  keyword: '',
  searches: [],
  notFound: false
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HEROES':
      return {...state, heroes: action.payload.heroes};
    case 'KEYWORD_CHANGE':
      return {...state, keyword: action.payload.keyword};
    case 'FETCH_SEARCHES':
      return {...state, searches: action.payload.searches};
    case 'NOTFOUND_CHANGE':
      return {...state, notFound: action.payload.notFound};
    default:
      return state;
  };
}

export default heroReducer;
