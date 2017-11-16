import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { allPoke,  } from '../actions/index'

class HomeReactRedux extends React.Component {
    constructor() {
        super()
    }

    render () {
        return(
            <div>
                <h1>Home Page React-Redux</h1>
                <ul>
                    <li>
                        <Link to="/trainerDetail">
                            <h4>Trainer Profile</h4>
                        </Link>
                        {this.showAllPokeReactRedux.call(this)}
                    </li>
                </ul>
            </div>
        )
    }

    componentWillMount() {
        var proxy = 'https://cors-anywhere.herokuapp.com/'
        var urlPoke = 'http://pokeapi.co/api/v2/pokemon/'
        // var urlPoke = 'https://swapi.co/api/people'
        axios.get(proxy + urlPoke)
            // axios({
            //   method: 'get',
            //   url: proxy + urlPoke,
            // })
            .then(({ data }) => {
                if (data.results) {
                    // alert(JSON.stringify(data.results))
                    this.props.allPoke(data.results)
                }
            })
    }

    showAllPokeReactRedux () {
        if (this.props.pokeBox.length > 0) {
            console.log('FROM SHOW ALL POKE REACT REDUX', this.props.pokeBox)
            return <div>
                {this.props.pokeBox.map(singlePoke => {
                    // var detailPoke = `/detailPoke/${singlePoke.name}`
                    return <div key={singlePoke.name}>
                        <Link
                            onClick={this.sendPokeBox.bind(this, singlePoke)}
                            to={'/detailPokeReactRedux/' + singlePoke.name}>
                            <p>
                                {singlePoke.name}
                            </p>
                        </Link>
                    </div>
                })}
            </div>
        } else {
            return <div>
                <h3>Waiting to fetch pokemon data....</h3>
            </div>
        }
    }

    sendPokeBox (val) {
        this.props.getPokeBox(val)
    }
}



const mapState = (state) => {
    console.log('THIS IS HOME REDUCER REACT REDUX', state)
    return {
        pokeBox: state.pokeBox
    }
}

const mapActions = (dispatch) => {
    return {
        allPoke: (payload) => dispatch(allPoke(payload))
    }
}

const connectedToHomeReactRedux = connect(
    mapState,
    mapActions
)(HomeReactRedux)


export default (connectedToHomeReactRedux)