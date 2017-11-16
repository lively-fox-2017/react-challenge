import axios from 'axios'

export const getHeroes = (_heroes) => {
  return {
    type: 'GET_HEROES',
    payload: {
      heroes: _heroes
    }
  }
}

export const setSelectedHero = (activeHero) => {
  return {
    type: 'SET_ACTIVE_HERO',
    payload: {
      hero: activeHero
    }
  }
}

export const destroyActiveHero = {
  type: 'DESTROY_ACTIVE_HERO'
}

export const fetchSwapi = () => {
  return (dispatch, getState) => {
    console.log('Ini adalah isi dari state foo', getState().foo);
    axios.get('https://swapi.co/api/people/')
    .then(({ data }) => {
      // console.log('ini data yg di dapat', data.results);
      // let heroes = data.results
      dispatch(getHeroes(data.results))
    })
    .catch((err) => {
      console.error(err)
    })
  }
}
