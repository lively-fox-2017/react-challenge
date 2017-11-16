import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchSwapi, destroyActiveHero } from '../actions/heroAction'

import ContentRedux from './ContentRedux'
import DetailHeroesRedux from './DetailHeroesRedux'

class HomeReactRedux extends Component {
  // constructor (props) {
  //   super(props)
  //   console.log('isi props', this.props)
  //   this.props.getHeroes()
  // }
  // fetchSwapi () {
  //   this.props.getHeroes()
  // }

  destroyPreviousActiveHero () {
    this.props.destroyActiveHero()
  }

  componentWillMount () {
    console.log('jenennge jekek', this.props)
    this.props.x()
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
    x: () => dispatch(fetchSwapi()),
    destroyActiveHero: () => dispatch(destroyActiveHero)
  }
}

const mapStateToProps = (state) => {
  // console.log('ini state 1---->', this.fetchSwapi())
  return {
    dataHero: state.heroes
  }
}

var ConnectedComponent = connect(
  mapStateToProps, mapDispatchToProps
) (HomeReactRedux)

export default ConnectedComponent
