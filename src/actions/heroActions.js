export const fetchHeroes = (heroes) => {
  return {
    type: 'FETCH_HEROES',
    payload: {
      heroes
    }
  };
};

export const requestHeroes = () => {

  return (dispatch) => {
    window.$openDota
          .get('/heroes')
          .then(({ data }) => {
            dispatch(fetchHeroes(data));
          })
          .catch((err) => {
            console.error(err);
          });
  };

};

export const fetchById = (hero) => {
  return {
    type: 'FETCH_BY_ID',
    payload: {
      hero
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

export const fetchByIdNotFoundChange = (fetchByIdNotFound) => {
  return {
    type: 'FETCH_BY_ID_NOTFOUND_CHANGE',
    payload: {
      fetchByIdNotFound
    }
  }
}
