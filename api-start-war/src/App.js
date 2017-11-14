import React, {Component} from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      statrWar: []
    }
  }

  componentWillMount () {
    axios.get('https://swapi.co/api/people/1/')
    .then(({ data }) => {
      console.log('ini ', data)
      this.setState({
        statrWar: data
      })
      console.log('state', this.state.statrWar);
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render () {
    return (
      <div>
        <Navbar/>
        <ul>
          <li>{this.state.statrWar.name}</li>
        </ul>
      </div>
    )
  }

}
