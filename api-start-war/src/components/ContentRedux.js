import React, { Component } from 'react'
import store from '../store'
import { setSelectedHero } from '../actions/heroAction'

class ContentRedux extends Component {
  constructor (props) {
    super()
    this.state = {
      hero: props.dataHero.hero
    }
    this.setActiveHero = this.setActiveHero.bind(this)
  }

  setActiveHero () {
    store.dispatch(setSelectedHero(this.state.hero))
  }

  render () {
    return (
      <button onClick={this.setActiveHero} className="list-group-item">
        {this.props.dataHero.hero.name}
      </button>
    )
  }
}

export default ContentRedux
