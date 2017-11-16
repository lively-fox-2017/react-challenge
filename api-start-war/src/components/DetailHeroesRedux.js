import React, {Component} from 'react'
import store from '../store'

class DetailHeroesRedux extends Component {
  constructor() {
    super()
    this.state = {
      activeHero: ''
    }
  }

  componentDidMount () {
    store.subscribe(() => {
      this.setState({
        activeHero: store.getState().activeHero
      })
    })
  }

  render () {
    if (this.state.activeHero === '') {
      return (
        <div className="panel panel-primary panel-inverse">
          <div className="panel-heading">
            <h3 className="panel-title">
              <p>tidak ada yang di pilih</p>
            </h3>
          </div>
          <div className="panel-body">
            <p>belum ada</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="panel panel-primary panel-inverse">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.activeHero.name}
            </h3>
          </div>
          <div className="panel-body">
            <p>Height : {this.state.activeHero.height}</p>
            <p>Mass : {this.state.activeHero.mass}</p>
            <p>Gender : {this.state.activeHero.gender}</p>
            <p>Eye Color: {this.state.activeHero.eye_color}</p>
            <p>Hair Color : {this.state.activeHero.hair_color}</p>
            <p>Skin Color: {this.state.activeHero.skin_color}</p>
          </div>
        </div>
      )
    }
  }
}


export default DetailHeroesRedux
