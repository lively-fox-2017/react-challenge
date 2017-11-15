export const fetchHeroes = (heroes) => {
  return {
    type: 'FETCH_HEROES',
    payload: {
      heroes
    }
  };
};

export const keywordChange = (keyword) => {
  return {
    type: 'KEYWORD_CHANGE',
    payload: {
      keyword
    }
  };
};

export const fetchSearches = (searches) => {
  return {
    type: 'FETCH_SEARCHES',
    payload: {
      searches
    }
  };
};

export const searchNotFoundChange = (searchNotFound) => {
  return {
    type: 'SEARCH_NOTFOUND_CHANGE',
    payload: {
      searchNotFound
    }
  }
};
