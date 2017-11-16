
const pokeState = {
    pokeBox: [],
    singlePoke: {
        url: null,
        data: []
    }
}

const pokeReducer= (state = pokeState, actions) => {
    switch (actions.type) {
        case 'GET_ALL_POKE':
            console.log('FROM REDUCER ALL POKE', actions.payload)
            return {...state, pokeBox: actions.payload}
        case 'GET_SINGLE_POKE':
            return {...state, singlePoke: actions.payload}
        default:
            return state
    }
}

export default pokeReducer

