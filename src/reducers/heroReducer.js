const initialState = {
  heroes: [],
  keyword: '',
  searches: [],
  searchNotFound: false
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HEROES':
      return {...state, heroes: action.payload.heroes};
    case 'KEYWORD_CHANGE':
      return {...state, keyword: action.payload.keyword};
    case 'FETCH_SEARCHES':
      return {...state, searches: action.payload.searches};
    case 'SEARCH_NOTFOUND_CHANGE':
      return {...state, searchNotFound: action.payload.searchNotFound};
    default:
      return state;
  };
}

export default heroReducer;
