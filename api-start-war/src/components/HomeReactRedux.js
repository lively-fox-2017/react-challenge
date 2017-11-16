import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getHeroes, destroyActiveHero } from '../actions/heroAction'

import ContentRedux from './ContentRedux'
import DetailHeroesRedux from './DetailHeroesRedux'

class HomeReactRedux extends Component {
  fetchSwapi () {
    axios.get('https://swapi.co/api/people/')
    .then(({ data }) => {
      let heroes = data.results
      this.props.getHeroes(heroes)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  destroyPreviousActiveHero () {
    this.props.destroyActiveHero()
  }

  componentWillMount () {
    this.fetchSwapi()
    this.destroyPreviousActiveHero()
  }

  render () {
    return (
      <div>
        <h1>ini halaman React-Redux </h1>
        <div className="container">
          <div className="col-md-4">
            <div className="list-group">
              {this.props.dataHero.map((hero, index) => {
                let propsData = { hero: hero, heroKey: index }
                return <ContentRedux dataHero={propsData} key={index} />
              })}
            </div>
          </div>
          <div className="col-md-8">
            <DetailHeroesRedux />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHeroes: (_heroes) => dispatch(getHeroes(_heroes)),
    destroyActiveHero: () => dispatch(destroyActiveHero)
  }
}

const mapStateToProps = (state) => {
  return {
    dataHero: state.heroes
  }
}

var ConnectedComponent = connect(
  mapStateToProps, mapDispatchToProps
) (HomeReactRedux)

export default ConnectedComponent
