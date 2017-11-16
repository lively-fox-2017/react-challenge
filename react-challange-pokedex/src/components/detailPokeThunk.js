import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { singlePokeThunk } from '../actions/index'

class DetailPokeReactRedux extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {this.mountedComponent.call(this)}
            </div>
        )
    }

    componentWillMount() {
        console.log('FROM DETAIL REACT REDUX', this.props.pokeBoxDetail)
        if (this.props.pokeBoxDetail.url) {
            this.props.singlePokeThunk(this.props.pokeBoxDetail.url)
        } else {
            return < Redirect to='/' />
        }
    }

    mountedComponent() {
        if (!this.props.pokeBoxDetail.name) {
            return <div>
                <h5>CANT GET DATA...PLEASE BACK TO HOME AND TRY AGAIN..</h5>
            </div>
        } else if (this.props.singlePokemon.sprite) {
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
    console.log('FROM DETAIL POKE THUNK: ',state)
    return {
        singlePokemon: state.singlePokemon
    }
}

const mapActions = (dispatch) => {
    return {
        singlePokeThunk: (payload) => dispatch(singlePokeThunk(payload))
    }
}

const ConnectDetailPokeReactRedux = connect(
    mapState,
    mapActions
)(DetailPokeReactRedux)

export default ConnectDetailPokeReactRedux
// export default DetailPokeReactRedux