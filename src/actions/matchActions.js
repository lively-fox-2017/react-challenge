export const fetchMatches = (matches) => {
  return {
    type: 'FETCH_MATCHES',
    payload: {
      matches
    }
  };
};
