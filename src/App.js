import React, { Component } from 'react'
import http from 'axios'

import Map from './Map'
import StopList from './StopList';
import './assets/css/bootstrap.min.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      lat: -6.260721,
      lng: 106.7810405,
      stops: []
    }
  }

  componentWillMount () {
    http.get(`http://api-ext.trafi.com/stops/nearby?lat=${this.state.lat}&lng=${this.state.lng}&api_key=a32a077fd5d96f1590e891228beed762`)
      .then(({data}) => {
        this.setState({
          stops: data.Stops
        })
      })
  }

  handleMapMarker (lat, lng) {
    this.setState({
      lat: lat,
      lng: lng
    }, function () {
      http.get(`http://api-ext.trafi.com/stops/nearby?lat=${this.state.lat}&lng=${this.state.lng}&api_key=a32a077fd5d96f1590e891228beed762`)
        .then(({data}) => {
          this.setState({
            stops: data.Stops
          })
        })
    })
  }

  stopsElement () {
    let stops = this.state.stops.map((element, index) => {
      return <StopList key={index} stop={element} />
    })
    return stops
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">Main API</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>

        <Map isMarkerShown handleMapMarker={(a,b) => this.handleMapMarker(a,b)} lat={this.state.lat} lng={this.state.lng} stops={this.state.stops} />
        {this.stopsElement()}
      </div>
    );
  }
}

export default App
