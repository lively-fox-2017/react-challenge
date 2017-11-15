import React from 'react'
import { Redirect } from 'react-router-dom'

class ForecastDetail extends React.Component {
  constructor () {
    console.log('sini')
    super()
    this.state = {
      weather: {
        main: {},
        coord: {},
        wind: {},
        weather: [{}]
      }
    }
  }
  getDay() {
    var date = new Date().getDay()
    switch (date) {
      case 1:
        {
          return 'Monday'
        }
      case 2:
        {
          return 'Tuesday'
        }
      case 3:
        {
          return 'Wednesday'
        }
      case 4:
        {
          return 'Thursday'
        }
      case 5:
        {
          return 'Friday'
        }
      case 6:
        {
          return 'Saturday'
        }
      case 7:
        {
          return 'Sunday'
        }
      default:
        {
          return 'Invalid Date'
        }
    }
  }
  // getDetailData () {
  //   axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.props.match.params.city + '&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
  //     this.setState({weather: data.data})
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
  componentWillMount () {
    // this.getDetailData()
    // console.log(this.props.weather)
  }
  render() {
    console.log('haha')
    if(!this.props.weather) {
      return <Redirect push to="/redux/"/>
    } else {
      return (
        <div>
          <div className="col-md-6 col-sm-6">
            <div className="live-camera">
              <h1 className="location">{this.props.weather.name}</h1>
              <h3 className="date">Latitude: {this.props.weather.coord.Lat} Longitude: {this.props.weather.coord.Lon}</h3>
              <h3 className="location">Temperature: {this.props.weather.main.temp}<sup>o</sup>C, Min: {this.props.weather.main.temp_min}<sup>o</sup>C, Max: {this.props.weather.main.temp_max}<sup>o</sup>C</h3>
              <h3 className="date">Pressure: {this.props.weather.main.pressure}, Humidity: {this.props.weather.main.humidity}</h3>
              <h3 className="location">Forecast: {this.props.weather.weather[0].main}, {this.props.weather.weather[0].description}</h3>
              <h3 className="date">Wind Speed: {this.props.weather.wind.speed}</h3>
              <small className="date">{new Date().toString()}</small>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="container">
              <div className="forecast-table">
                <div className="container">
                  <div className="forecast-container" style={{'maxWidth':'100px'}}>
                    <div className="today forecast">
                      <div className="forecast-header">
                        <div className="day">{this.getDay()}</div>
                      </div>
                      <div className="forecast-content">
                        <div className="location">{this.props.weather.name}</div>
                        <div className="degree">
                          <div className="num">{this.props.weather.main.temp_max}
                            <sup>o</sup>C
                          </div>
                          {this.props.weather.main.temp_min}<sup>o</sup>C
                          <div className="forecast-icon">
                            <img src={this.state.icon} alt="" width="90"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ForecastDetail
