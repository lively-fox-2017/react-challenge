
const pokeState = {
    pokeBox: [],
    singlePokemon: {
        name: null,
        stats: {},
        sprite: null,
        ability: {}
    }
}

const pokeReducer= (state = pokeState, actions) => {
    switch (actions.type) {
        case 'GET_ALL_POKE':
        return {...state, pokeBox: actions.payload}
        case 'GET_SINGLE_POKE':
        console.log('FROM REDUCER SINGLE POKE', actions.payload)
            return {...state, 
                singlePokemon: {
                    ...state.singlePokemon, 
                    name: actions.payload.name,
                    stats: actions.payload.stats,
                    sprite: actions.payload.sprite,
                    ability: actions.payload.ability
                }
            }
        default:
            return state
    }
}

export default pokeReducer

