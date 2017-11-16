
export const allPoke = (params) =>{
    return {
        type: 'GET_ALL_POKE',
        payload: params
    }
}

export const singlePoke = (params) =>{
    console.log('FROM ACTIONS SINGLE POKE', params)
    return{
        type: 'GET_SINGLE_POKE',
        payload: params
    }
}
