import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { singlePoke } from '../actions/index'

class DetailPokeReactRedux extends React.Component {
    constructor() {
        super()
    }

    render () {
        return (
            <div>
                {this.mountedComponent.call(this)}
            </div>
        )
    }

    componentWillMount () {
        console.log('FROM DETAIL REACT REDUX', this.props.pokeBoxDetail)
        // this.props.singlePoke()
        if (this.props.pokeBoxDetail.name) {
            var proxy    = 'https://cors-anywhere.herokuapp.com/'
            var urlPoke  = `${this.props.pokeBoxDetail.url}`
            var pokeName = this.props.pokeBoxDetail.name

            axios.get(proxy + urlPoke)
                    .then(({ data }) => {
                        var pokeStats = {
                            pokeAbility: data.abilities,
                            pokeHP: data.stats[5].base_stat,
                            pokeAtk: data.stats[4].base_stat,
                            pokeDef: data.stats[3].base_stat,
                            pokeSpAtk: data.stats[2].base_stat,
                            pokeSpDef: data.stats[1].base_stat,
                            pokeSpeed: data.stats[0].base_stat
                        }
                        var pokeAbility= {
                            hidden: data.abilities[0].ability.name,
                            normal: data.abilities[1].ability.name
                        }
                        var urlSprite = `${data.forms[0].url}`
                        axios.get(proxy+urlPoke)
                        .then( ({data}) => {
                            var pokeSprite = data.sprites.front_default
                            this.props.singlePoke({
                                name: pokeName,
                                stats: pokeStats,
                                sprite: pokeSprite,
                                ability: pokeAbility 
                            })
                        })
                    })
        } else {
            // alert('PLEASE BACK TO HOME')
            return < Redirect to='/' />
        }
    }

    mountedComponent () {
        if (!this.props.pokeBoxDetail.name) {
            return <div>
                <h5>CANT GET DATA...PLEASE BACK TO HOME AND TRY AGAIN..</h5>
            </div>
        } else if (this.props.singlePokemon.name) {
            return <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="" align="center">
                    <img src={this.props.singlePokemon.sprite} alt="POKEMON" />
                </div>
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text">{this.props.singlePokemon.name}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <p>HP: {this.props.singlePokemon.stats.pokeHP} ,Speed: {this.props.singlePokemon.stats.pokeSpeed}</p>
                    <p>Atk: {this.props.singlePokemon.stats.pokeAtk}, Def: {this.props.singlePokemon.stats.pokeDef}</p>
                    <p>Sp Atk: {this.props.singlePokemon.stats.pokeSpAtk}, Sp Def: {this.props.singlePokemon.stats.pokeSpDef}</p>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Hidden Ability: {this.props.singlePokemon.ability.hidden}
                    </a>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Normal Ability: {this.props.singlePokemon.ability.normal}
                    </a>
                </div>
            </div>
        } else {
            return <div>
                <h5>Retrieveing Information...please wait....</h5>
            </div>
        }
    }
}

const mapState = (state) => {
    // console.log('FROM DETAIL POKE REACT REDUX: ',state)
    return {
        singlePokemon: state.singlePokemon
    }
}

const mapActions = (dispatch) => {
    return {
        singlePoke: (payload) => dispatch(singlePoke(payload))
    }
}

const ConnectDetailPokeReactRedux = connect(
    mapState,
    mapActions
)(DetailPokeReactRedux)

export default ConnectDetailPokeReactRedux
// export default DetailPokeReactRedux