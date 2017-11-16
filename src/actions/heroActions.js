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
            console.log(err);
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

export const requestById = (id) => {
  return (dispatch, getState) => {
    window.$openDota
          .get('/heroes')
          .then(({ data }) => {
            const hero = data.filter((datum) => {
              return datum.id === parseInt(id, 10);
            })[0] || {};

            dispatch(fetchById(hero));

            if (!getState().heroReducer.hero.hasOwnProperty('id')) {
              dispatch(fetchByIdNotFoundChange(true));
            }
          })
          .catch((err) => {
            console.log(err);
          });
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
