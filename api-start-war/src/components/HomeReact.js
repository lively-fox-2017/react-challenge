import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'

import Content from './Content'
import DetailHeroes from './DetailHeroes'

class HomeReact extends Component {
  constructor() {
    super()
    this.state = {
      heroes: []
    }
  }

  fetchSWAPI () {
    axios.get('https://swapi.co/api/people/')
    .then(({ data }) => {
      console.log('--->', data.results)
      this.setState({
        heroes: data.results
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }

  componentDidMount () {
    this.fetchSWAPI()
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <h1>home pure react</h1>
            <div className="container">
              <div className="col-md-4">
                <div className="list-group">
                  { this.state.heroes.map((hero, index) => {
                    let propsData = { hero: hero, heroKey: index}
                    return <Content dataHero={propsData} key={index} />
                  })}
                </div>
              </div>
              <div className="col-md-8">
                <Route path="/:id" component={DetailHeroes} />
              </div>
            </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default HomeReact
