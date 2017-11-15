const updateDetail = (payload) => {
  const state = {
    title: payload.title || '',
    actors: payload.actors ||'',
    director: payload.director ||'',
    genre: payload.genre ||'',
    poster: payload.poster ||'',
    released: payload.released ||'',
  };
  return {
    type: 'UPDATE_DATA',
    state,
  }
}


export default {
  UPDATE_DATA: updateDetail,
}
