import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import dotenv from 'dotenv'

import {selectLocation} from '../actions/LocationActions'
import {fetchNearbyStops} from '../actions/StopsActions'
import Map from './Map'
import StopList from './StopList'
import DepartureList from './DepartureListReactRedux';
import '../assets/css/bootstrap.min.css'

dotenv.config()

const mapStateToProps = (state) => {
  return {lat: state.LocationReducer.lat, lng: state.LocationReducer.lng, stops: state.StopsReducer.stops}
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectLocation: (lat, lng) => dispatch(selectLocation(lat, lng)),
    fetchNearbyStops: (lat, lng) => dispatch(fetchNearbyStops(lat, lng))
  }
}

class App extends Component {
  componentWillMount() {
    this.props.fetchNearbyStops(this.props.lat, this.props.lng)
  }

  handleMapMarker(lat, lng) {
    this.props.selectLocation(lat, lng)
    this.props.fetchNearbyStops(this.props.lat, this.props.lng)
  }

  stopsElement() {
    let stops = this.props.stops.map((element, index) => {
      return <StopList key={element.Id} stop={element}/>
    })
    return stops
  }

  render() {
    return (<Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">Main API</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <NavLink to="/" activeClassName="nav-item active">
                Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </ul>
          </div>
        </nav>

        <Route exact path="/" render={() => {
            return (<div><Map draggable={true} handleMapMarker={(a, b) => this.handleMapMarker(a, b)} lat={this.props.lat} lng={this.props.lng} stops={this.props.stops}/> {this.stopsElement()}</div>)
          }}/>

        <Route path="/detail/:id" render={(props) => {
            return (<div>
              <Map draggable={false} handleMapMarker={(a, b) => this.handleMapMarker(a, b)} lat={this.props.lat} lng={this.props.lng} stops={this.props.stops.filter(stop => stop.Id === props.match.params.id)}/>
              <DepartureList stopId={props.match.params.id}/>
            </div>)
          }}/>

      </div>
    </Router>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
