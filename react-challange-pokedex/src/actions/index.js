import axios from 'axios'

const proxy = 'https://cors-anywhere.herokuapp.com/'
const urlPoke = 'http://pokeapi.co/api/v2/pokemon/'
const http = axios.create({
    baseURL:proxy + urlPoke
})

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

export const allPokeThunk = (params) => {
    return (dispatch) => {
        http.get('/')
        .then(({data}) => {
            if (data.results){
                dispatch({
                    type: 'GET_ALL_POKE_THUNK',
                    payload: data.results
                })
            } else {
                alert('ERROR GET ALL DATA POKE')
            }
        })
    }
}

export const singlePokeThunk = (params) => {
    console.log('FROM ACTIONS SINGLE POKE', params)
    return {
        type: 'GET_SINGLE_POKE_THUNK',
        payload: params
    }
}