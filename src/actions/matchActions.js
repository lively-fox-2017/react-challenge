export const fetchMatches = (matches) => {
  return {
    type: 'FETCH_MATCHES',
    payload: {
      matches
    }
  };
};

export const requestMatches = (heroId) => {
  return (dispatch) => {
    // Make 'matches' state empty first
    dispatch(fetchMatches([]));
    window.$openDota.get('/heroes/' + heroId + '/matches')
      .then(({ data }) => {
        dispatch(fetchMatches(data.slice(0, 5))); // limit only 5
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
