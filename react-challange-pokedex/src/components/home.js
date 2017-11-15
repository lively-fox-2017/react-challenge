import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
                <h1>This is Home Page</h1>
                <Link to="/trainerDetail">
                    <h4>Trainer Profile</h4>
                </Link>
                {this.loopPoke.call(this)}
            </div>
        )
    }

    componentWillMount() {
        var proxy = 'https://cors-anywhere.herokuapp.com/'
        var urlPoke = 'http://pokeapi.co/api/v2/pokemon'
        // axios.get(proxy + urlPoke)
        axios({
          method: 'get',
          url: proxy + urlPoke,
        })
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
                    return <div key={singlePoke.name}>
                        <p>{singlePoke.name}</p>
                    </div>
                })}
            </div>
        } else {
            return <div>
                <Link to="/detail"><h3>
                Waiting to fetch pokemon data....
                </h3>
                </Link>
            </div>
        }
    }
}

export default HomeClass