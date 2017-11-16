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
