import React from 'react'

class CityItem extends React.Component {
  render() {
    return(
      <div className="col-md-3 col-sm-6" onClick={ () => this.redirectToDetail(this.props.props.index)} >
        <div className="live-camera">
          <h3 className="location">{this.props.props.weather.name}</h3>
          <small className="date">{new Date().toString()}</small>
        </div>
      </div>
    )
  }
}

export default CityItem
