const initState = {
  heroes: [],
  activeHero: '',
  foo: 'bar'
}

function heroReducer (state = initState, action) {
  switch (action.type) {
    case 'GET_HEROES':
      return { ...state, heroes: action.payload.heroes}
    case 'SET_ACTIVE_HERO':
      return { ...state, activeHero: action.payload.hero}
    case 'DESTROY_ACTIVE_HERO':
      return { ...state, activeHero: ''}
    default:
      return state
  }
}

export default heroReducer
