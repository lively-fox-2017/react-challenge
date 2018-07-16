import React from 'react'
import axios from 'axios'
import DetailPoke from '../components/detailPoke'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import '../App.css'

class HomeClass extends React.Component {
    constructor(props) {
      super()
      this.state = {
          pokeBox : []
      }
    }  
    
    render () {
        return (
            <div>
                <div className="sidebar-overlay">
                    <h3>Home Page</h3>
                    <ul className="nav sidebar-nav">
                        <li>
                            <Link to="/trainerDetail">
                                <h4>Trainer Profile</h4>
                            </Link>
                        </li>
                        {this.loopPoke.call(this)}
                    </ul>
                </div>
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
        .then( ({data}) =>{
          console.log(data.results)
          
          if (data.results){
              this.setState({
                  pokeBox:data.results
              })
          }
        })
    }

    loopPoke () {
        if (this.state.pokeBox.length > 0) {
            return <div>
                {this.state.pokeBox.map(singlePoke=>{
                    var urlDataPoke      = singlePoke.url
                    var splitDataUrlPoke = urlDataPoke.split('/')
                    var idPoke = splitDataUrlPoke[splitDataUrlPoke.length-2]
                    return <div key={singlePoke.name}>
                        <Link 
                        onClick={this.sendPokeBox.bind(this,singlePoke)}
                        to={'/detailPoke/' + singlePoke.name +'/'+ idPoke}>
                            <p>
                            {singlePoke.name}
                            </p>
                        </Link>
                    </div>
                })}
            </div>
        } else {
            return <div>
                {/* <Link to="/detail"><h3> */}
                <h3>Waiting to fetch pokemon data....</h3>
                {/* </h3></Link> */}
            </div>
        }
    }

    sendPokeBox (val) {
        this.props.getPokeBox(val)
    }
}

export default HomeClass