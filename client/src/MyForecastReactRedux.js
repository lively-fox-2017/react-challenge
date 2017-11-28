import React from 'react'
import umberellaLogo from './images/icon-umberella.png';
import compassLogo from './images/icon-compass.png';
import windLogo from './images/icon-wind.png';

import halfSun from './images/icon-1.svg';
import fullSun from './images/icon-2.svg';
import cloudSun from './images/icon-3.svg';
import cloudRainSun from './images/icon-4.svg';
import cloud from './images/icon-5.svg';
import rain from './images/icon-10.svg';
import thunderRain from './images/icon-11.svg';
import thunder from './images/icon-12.svg';

import store from './store'

import { connect } from 'react-redux'

class MyForecastReactRedux extends React.Component {
  constructor () {
    super()
  }
  getWeatherIcon() {
    switch (store.getState().MyWeather.weather.weather[0].main) {
      case 'Clouds':
        {
          return cloud
        }
      case 'Rain':
        {
          return rain
        }
      case 'Thunderstorm':
        {
          return thunderRain
        }
      case 'Haze':
        {
          return cloudSun
        }
      default:
        {
          return halfSun
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
  render () {
    return (
      <div>
        <div className="container">
          <div className="forecast-table">
            <div className="container">
              <div className="forecast-container">
                <div className="today forecast">
                  <div className="forecast-header">
                    <div className="day">{this.getDay()}</div>
                    <div className="date">{(new Date()).toString()}</div>
                  </div>
                  <div className="forecast-content">
                    <div className="location">{this.props.MyWeather.weather.name}</div>
                    <div className="degree">
                      <div className="num">{this.props.MyWeather.weather.main.temp}
                        <sup>o</sup>C</div>
                      <div className="forecast-icon">
                        <img src={this.getWeatherIcon()} alt="" width="90"/>
                      </div>
                    </div>
                    <span><img src={umberellaLogo} alt=""/>{this.props.MyWeather.weather.main.humidity}%</span>
                    <span><img src={windLogo} alt=""/>{this.props.MyWeather.weather.wind.speed}km/h</span>
                    <span><img src={compassLogo} alt=""/>{this.props.MyWeather.weather.weather[0].main}</span>
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

const mapStateToProps = (state) => {
  return {
    'MyWeather': state.MyWeather
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyForecastReactRedux)
