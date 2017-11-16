
export const allPoke = (params) =>{
    console.log('FROM ACTIONS ALL POKE', params)
    return {
        type: 'GET_ALL_POKE',
        payload: params
    }
}

export const singlePoke = (params) =>{
    return{
        type: 'GET_SINGLE_POKE',
        payload: params
    }
}
