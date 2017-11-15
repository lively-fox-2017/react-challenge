import React, { Component } from 'react'
import http from 'axios'

export default class DepartureList extends Component {
  constructor () {
    super()
    this.state = {
      schedules: []
    }
  }

  componentWillMount () {
    http.get(`http://api-ext.trafi.com/departures?stop_id=${this.props.stopId}&region=jakarta&api_key=${process.env.REACT_APP_TRAFISECRET}`)
      .then(({data}) => {
        this.setState({
          schedules: data.Schedules
        })
      })
  }

  listDepartures (departures) {
    let departureList = departures.map((element, index) => {
      return (
        <div key={index} className="list-group">
          <li className="list-group-item ">
            {element.VehicleId} ETA: {element.TimeLocal} ({element.RemainingMinutes} Menit)
          </li>
        </div>
      )
    })
    return departureList
  }

  listSchedules () {
    let schedules = this.state.schedules.map(schedule => {
      return (
        <div key={schedule.ScheduleId} className="card border-info">
          <div className="card-body">
            <h5 className="card-title">Tujuan: {schedule.Destination}</h5>
            <blockquote className="card-blockquote">
              <h6>Keberangkatan: </h6>
              {this.listDepartures(schedule.Departures)}
            </blockquote>
          </div>
        </div>
      )
    })
    return schedules
  }

  render() {
    return (
      <div>
        {this.listSchedules()}
      </div>
    );
  }

}
