import React, { Component } from 'react'

import './assets/css/bootstrap.min.css'

class StopList extends Component {
  listGroup () {
    let stops = this.props.stop.StopTooltip.SchedulesAtStop.map((element, index) => {
      return (
        <div key={index} className="list-group">
          <li className="list-group-item ">
            {element.Name}
          </li>
        </div>
      )
    })
    return stops
  }

  render() {
    return (
      <div className="card border-info">
        <div className="card-body">
          <h5 className="card-title">{this.props.stop.Name}</h5>
          <h6 className="card-subtitle text-muted">{this.props.stop.StopTooltip.DistanceText}</h6>
          <blockquote className="card-blockquote">
            <h6>Angkutan: </h6>
            {this.listGroup()}
          </blockquote>
        </div>
      </div>
    );
  }
}

export default StopList
