import axios from 'axios'

const proxy = 'https://cors-anywhere.herokuapp.com/'
const urlPoke = 'http://pokeapi.co/api/v2/pokemon/'
const http = axios.create({
    baseURL:proxy
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
        http.get(`/${urlPoke}`)
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
    var idPoke = params
    var urlSinglePoke = `http://pokeapi.co/api/v2/pokemon/${idPoke}/`
    return (dispatch) => {
        http.get(`/${urlSinglePoke}`)
        .then(({data}) =>{
            var pokeName = data.name
            var pokeStats = {
                pokeAbility: data.abilities,
                pokeHP: data.stats[5].base_stat,
                pokeAtk: data.stats[4].base_stat,
                pokeDef: data.stats[3].base_stat,
                pokeSpAtk: data.stats[2].base_stat,
                pokeSpDef: data.stats[1].base_stat,
                pokeSpeed: data.stats[0].base_stat
            }
            var pokeAbility = {
                hidden: data.abilities[0].ability.name,
                normal: data.abilities[1].ability.name
            }
            var urlSprite = `${data.forms[0].url}`
            http.get(`/${urlSprite}`)
            .then(({data}) => {
                var pokeSprite = data.sprites.front_default
                var objSinglePoke = {
                    name: pokeName,
                    stats: pokeStats,
                    sprite: pokeSprite,
                    ability: pokeAbility
                }
                console.log('BEFORE DISPATCH THUNK')
                dispatch({
                    type: 'GET_SINGLE_POKE_THUNK',
                    payload: objSinglePoke
                })
            })
        })
    }
}