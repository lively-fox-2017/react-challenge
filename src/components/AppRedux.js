import React, { Component } from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import dotenv from 'dotenv'

import { store } from '../store'
import { selectLocation } from '../actions/LocationActions'
import { fetchNearbyStops } from '../actions/StopsActions'
import Map from './Map'
import StopList from './StopList'
import DepartureList from './DepartureListRedux';
import '../assets/css/bootstrap.min.css'

dotenv.config()

class App extends Component {
  constructor () {
    super()
    this.state = {
      lat: store.getState().LocationReducer.lat,
      lng: store.getState().LocationReducer.lng,
      stops: store.getState().StopsReducer.stops
    }
    store.subscribe(() => {
      this.setState({
        lat: store.getState().LocationReducer.lat,
        lng: store.getState().LocationReducer.lng,
        stops: store.getState().StopsReducer.stops
      })
    })
  }

  componentWillMount () {
    store.dispatch(fetchNearbyStops(store.getState().LocationReducer.lat, store.getState().LocationReducer.lng))
  }

  handleMapMarker (lat, lng) {
    store.dispatch(selectLocation(lat, lng))
    store.dispatch(fetchNearbyStops(store.getState().LocationReducer.lat, store.getState().LocationReducer.lng))
  }

  stopsElement () {
    let stops = this.state.stops.map((element, index) => {
      return <StopList key={element.Id} stop={element} />
    })
    return stops
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">Main API</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <NavLink to="/" activeClassName="nav-item active">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </ul>
            </div>
          </nav>

          <Route exact path="/" render={() => {
            return (
              <div><Map draggable={true} handleMapMarker={(a,b) => this.handleMapMarker(a,b)} lat={this.state.lat} lng={this.state.lng} stops={this.state.stops} />
                {this.stopsElement()}</div>
            )
          }} />

          <Route path="/detail/:id" render={(props) => {
            return (
              <div>
                <Map draggable={false} handleMapMarker={(a,b) => this.handleMapMarker(a,b)} lat={this.state.lat} lng={this.state.lng} stops={this.state.stops.filter(stop => stop.Id === props.match.params.id)} />
                <DepartureList stopId={props.match.params.id} />
              </div>
            )
          }} />

        </div>
      </Router>
    );
  }
}

export default App
