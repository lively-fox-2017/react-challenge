import React, { Component } from 'react'
import axios from 'axios'

import store from '../store'
import { getHeroes, destroyActiveHero } from '../actions/heroAction'

import ContentRedux from './ContentRedux'
import DetailHeroesRedux from './DetailHeroesRedux'

class HomeRedux extends Component {
  constructor() {
    super()
    this.state = {
      heroes: store.getState().heroes
    }
  }

  fetchSwapi() {
    axios.get('https://swapi.co/api/people/')
    .then(({ data }) => {
      let heroes = data.results
      store.dispatch(getHeroes(heroes))
    })
    .catch((err) => {
      console.error(err);
    })
  }

  destroyPreviousActiveHero () {
    store.dispatch(destroyActiveHero)
  }

  componentDidMount () {
    this.fetchSwapi()
    store.subscribe(() => {
      this.setState({
        heroes: store.getState().heroes
      })
    })
    this.destroyPreviousActiveHero()
  }

  render () {
    return (
      <div>
        <h1>menggunakan redux</h1>
        <div className="container">
          <div className="col-md-4">
            { this.state.heroes.map((hero, index) => {
              let propsData = {hero: hero, heroKey: index}
              return <ContentRedux dataHero={propsData} key={index} />
            })}
          </div>
          <div className="col-md-8">
            <DetailHeroesRedux />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeRedux
