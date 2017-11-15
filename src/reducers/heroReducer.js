const initialState = {
  heroes: [],
  hero: {},
  keyword: '',
  searches: [],
  searchNotFound: false,
  fetchByIdNotFound: false,
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HEROES':
      return {...state, heroes: action.payload.heroes};
    case 'FETCH_BY_ID':
      return {...state, hero: action.payload.hero};
    case 'KEYWORD_CHANGE':
      return {...state, keyword: action.payload.keyword};
    case 'FETCH_SEARCHES':
      return {...state, searches: action.payload.searches};
    case 'SEARCH_NOTFOUND_CHANGE':
      return {...state, searchNotFound: action.payload.searchNotFound};
    case 'FETCH_BY_ID_NOTFOUND_CHANGE':
      return {...state, fetchByIdNotFound: action.payload.fetchByIdNotFound};
    default:
      return state;
  };
}

export default heroReducer;
