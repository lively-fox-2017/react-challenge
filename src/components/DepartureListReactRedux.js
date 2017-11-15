import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchDeparture } from '../actions/DepartureActions'

const mapStateToProps = (state) => {
  return {
    schedules: state.DepartureReducer.schedules
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeparture: (stopId) => dispatch(fetchDeparture(stopId))
  }
}

class DepartureList extends Component {
  componentWillMount () {
    this.props.fetchDeparture(this.props.stopId)
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
    let schedules = this.props.schedules.map(schedule => {
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

export default connect(mapStateToProps, mapDispatchToProps)(DepartureList)
