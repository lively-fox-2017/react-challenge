import React from 'react'
import { Link } from 'react-router-dom'

class CityItemReactRedux extends React.Component {
  render() {
    var location = { pathname: '/about' }
    return(
      <div className="col-md-3 col-sm-6">
        <div className="live-camera" location={ location }>
          <h3 className="location"><Link to={'/react/' + this.props.props.weather.name} location={location}>{this.props.props.weather.name} </Link></h3>
          <small className="date">{new Date().toString()}</small>
        </div>
      </div>
    )
  }
}

export default CityItemReactRedux
