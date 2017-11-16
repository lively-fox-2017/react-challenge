import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class DetailPokeClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pokeName: null,
            pokeAbility: [
                { ability: { name: null } },
                { ability: { name: null } }
            ],
            pokeHP: null,
            pokeAtk: null,
            pokeDef: null,
            pokeSpAtk: null,
            pokeSpDef: null,
            pokeSpeed: null,
            pokeSprite: null
        }
    }

    render () {
        return (
            <div>
                {this.mountedComponent.call(this)}
            </div>
        )
    }
    componentWillMount() {
        console.log(JSON.stringify(this.props.pokeBoxDetail.url)+ ' DARI BELAKANG')
        if (this.props.pokeBoxDetail.name) {
            this.setState({
                pokeName: this.props.pokeBoxDetail.name
            }, ()=>{
                var proxy = 'https://cors-anywhere.herokuapp.com/'
                var urlPoke = `${this.props.pokeBoxDetail.url}`
                axios.get(proxy + urlPoke)
                .then(({data})=>{
                    this.setState({
                        pokeAbility: data.abilities,
                        pokeHP: data.stats[4].base_stat,
                        pokeAtk: data.stats[4].base_stat,
                        pokeDef: data.stats[3].base_stat,
                        pokeSpAtk: data.stats[2].base_stat,
                        pokeSpDef: data.stats[1].base_stat,
                        pokeSpeed: data.stats[0].base_stat,
                    })
                    var urlSprite = `${data.forms[0].url}`
                    axios.get(proxy+urlSprite)
                    .then(({data})=>{
                        alert('Data retrieved !')
                        this.setState({
                            pokeSprite: data.sprites.front_default
                        })
                        console.log('INI FORM DATA BULBA: ', data.sprites.front_default)
                    })
                    console.log('INI FETCH DATA BULBA: ', data)
                })
            })
        } else {
            // alert('PLEASE BACK TO HOME')
            return < Redirect to= '/' />
        }
    }

    mountedComponent () {
        if (!this.props.pokeBoxDetail.name) {
            return <div>
                <h5>CANT GET DATA...PLEASE BACK TO HOME AND TRY AGAIN..</h5>
            </div>
        }else if (this.state.pokeSprite){
            return <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="" align="center">
                    <img src={this.state.pokeSprite} alt="POKEMON" />
                </div>
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text">{this.props.pokeBoxDetail.name}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <p>HP: {this.state.pokeHP} ,Speed: {this.state.pokeSpeed}</p>
                    <p>Atk: {this.state.pokeAtk}, Def: {this.state.pokeDef}</p>
                    <p>Sp Atk: {this.state.pokeSpAtk}, Sp Def: {this.state.pokeSpDef}</p>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Hidden Ability: {this.state.pokeAbility[0].ability.name} 
                    </a>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Normal Ability: {this.state.pokeAbility[1].ability.name}
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

export default DetailPokeClass