export const fetchHeroes = (heroes) => {
  return {
    type: 'FETCH_HEROES',
    payload: {
      heroes
    }
  }
};
