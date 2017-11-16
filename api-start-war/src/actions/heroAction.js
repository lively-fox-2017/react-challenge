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
  return (dispatch, getHeroes) => {
    let url = axios.get('https://swapi.co/api/people/')
    console.log('ini hasil url', url)
    dispatch(getHeroes(url))
  }
}
