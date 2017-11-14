//Dependencies
import React, {Component} from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Link } from 'react-router-dom'

//Component File
import CityList from './CityList';
import MyForecast from './MyForecast';
import ForecastDetail from './ForecastDetail';

//Css File
import './App.css';
import './style.css'

//Image And Logo
import logo from './logo.svg';
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

class App extends Component {
  constructor() {
    super()
    this.state = {
      cityName: '',
      weather: {
        name: 'Still Waiting...',
        main: {
          temp: '',
          humidity: ''
        },
        wind: {
          speed: ''
        },
        weather: [{}]
      },
      weathers: [
        {
          name: '',
          main: {
            temp: '',
            humidity: ''
          },
          wind: {
            speed: ''
          },
          weather: [{}]
        }
      ]
    }
    // this.setCityName = this.setCityName.bind(this)
    // this.getWeatherByCity = this.getWeatherByCity.bind(this)
  }
  getWeatherByLocation() {
    var position = navigator.geolocation.getCurrentPosition((pos) => {
      // console.log(pos.coords.latitude)
      // console.log(pos.coords.longitude)
      axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + pos.coords.latitude.toString() + '&lon=' + pos.coords.longitude.toString() + '&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
        this.setState({weather: data.data})
      }).catch((err) => {
        console.log(err)
      })
    })
  }
  getWeatherByCity(e) {
    e.preventDefault()
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.cityName + '&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
      console.log(data.data)
      this.setState({weather: data.data})
    }).catch((err) => {
      console.log(err)
    })
  }
  getListBox() {
    axios.get('http://api.openweathermap.org/data/2.5/box/city?bbox=92.460937,-10.919618,141.152344,8.494105&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
      this.setState({
        weathers: data.data.list
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  getWeatherIcon() {
    switch (this.state.weather.weather[0].main) {
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
      default:
        {
          return halfSun
        }
    }
  }
  componentDidMount() {
    this.getWeatherByLocation()
    this.getListBox()
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
  setCityName(e) {
    this.setState({cityName: e.target.value})
  }
  findWeather(city) {
    var index = this.state.weathers.findIndex(weather => {
      if(weather.name === city) {
        return weather
      }
    })
    return this.state.weathers[index]
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App" style={{overflow:'hidden', width:'100%'}}>
        <header className="App-header">
          <Link to={'/'}><img src={logo} className="App-logo" alt="logo"/></Link>
          <h1 className="App-title">Welcome to React Weather</h1>
        </header>
        <div className="container">
          <div className="hero" data-bg-image="images/banner.png">
            <div className="container">
              <form action="#" className="find-location" onSubmit={(e) => this.getWeatherByCity(e)}>
                <input type="text" placeholder="Find your location..." onChange={(e) => this.setCityName(e)}/>
                <input type="submit" value="Find"/>
              </form>
            </div>
          </div>
          <MyForecast day={this.getDay()} icon={this.getWeatherIcon()} weather={this.state.weather}/>
          <main className="main-content">
            <div className="fullwidth-block">

                <div>
                  <Route exact path="/" render={()=><CityList weathers={this.state.weathers}/>}></Route>
                  <Route path="/:city" render={({match})=><ForecastDetail weather={this.findWeather(match.params.city)} />}></Route>
                </div>

            </div>
          </main>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
