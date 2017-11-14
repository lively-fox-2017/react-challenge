import React, {Component} from 'react'
import axios from 'axios'

export default class Home extends Component{
  constructor () {
    super();
    this.state = {
      starWars: []
    }
  }

  componentWillMount () {
    axios.get('https://swapi.co/api/people/1/')
    .then(({ data }) => {
      console.log('ini ', data)
      this.setState({
        starWars: data
      })
      console.log('state', this.state.starWars);
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render () {
    return (
      <div>
        <h2> start war </h2>
        <ul>
          <li>Nama: {this.state.starWars.name}</li>
          <li>Jenis kelamin : {this.state.starWars.gender}</li>
        </ul>
      </div>
    )
  }
}
