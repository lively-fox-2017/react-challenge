import React, { Component } from 'react'

class DetailHeroes extends Component {
  constructor({match, location}) {
    super()
    console.log('masuk sini1 -----')
    this.state = {
      id: match.params.id,
      hero: location.state.dataActiveHero
    }
  }

  componentWillReceiveProps ({match, location}) {
    console.log('masuk 2----')
    this.setState({
      id: match.params.id,
      hero: location.state.dataActiveHero
    })
  }

  render () {
    return (
      <div className="panel panel-default panel-inverse">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.state.hero.name}
          </h3>
        </div>
        <div className="panel-body">
          <p>Height: { this.state.hero.height }</p>
          <p>Mass: { this.state.hero.mass } </p>
          <p>Gender: { this.state.hero.gender }</p>
          <p>Eye Color : { this.state.hero.eye_color } </p>
          <p>Hair Color : { this.state.hero.hair_color }</p>
          <p>Skin color: { this.state.hero.skin_color }</p>
        </div>
      </div>
    )
  }
}

export default DetailHeroes
