import React from 'react'
import umberellaLogo from './images/icon-umberella.png';
import compassLogo from './images/icon-compass.png';
import windLogo from './images/icon-wind.png';

class MyForecast extends React.Component {
  render () {
    return (
      <div>
        <div className="container">
          <div className="forecast-table">
            <div className="container">
              <div className="forecast-container">
                <div className="today forecast">
                  <div className="forecast-header">
                    <div className="day">{this.props.day}</div>
                    <div className="date">{(new Date()).toString()}</div>
                  </div>
                  <div className="forecast-content">
                    <div className="location">{this.props.weather.name}</div>
                    <div className="degree">
                      <div className="num">{this.props.weather.main.temp}
                        <sup>o</sup>C</div>
                      <div className="forecast-icon">
                        <img src={this.props.icon} alt="" width="90"/>
                      </div>
                    </div>
                    <span><img src={umberellaLogo} alt=""/>{this.props.weather.main.humidity}%</span>
                    <span><img src={windLogo} alt=""/>{this.props.weather.wind.speed}km/h</span>
                    <span><img src={compassLogo} alt=""/>{this.props.weather.weather[0].main}</span>
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
export default MyForecast
