//Dependencies
import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'

//Redux
import store from './store'
import { GetCityList } from './actions/CityList'
import { GetMyWeather } from './actions/MyWeather'

//Component File
import CityList from './CityList';
import MyForecast from './MyForecast';
import ForecastDetail from './ForecastDetail';

class ReduxOnly extends React.Component {
  constructor() {
    super()
    this.state = {
      cityName: ''
    }
  }
  getWeatherByLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + pos.coords.latitude.toString() + '&lon=' + pos.coords.longitude.toString() + '&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
        store.dispatch(GetMyWeather(data.data))
      }).catch((err) => {
        console.log(err)
      })
    })
  }
  getWeatherByCity(e) {
    e.preventDefault()
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.cityName + '&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
      store.dispatch(GetMyWeather(data.data))
    }).catch((err) => {
      console.log(err)
    })
  }
  getListBox() {
    // axios.get('http://api.openweathermap.org/data/2.5/box/city?bbox=92.460937,-10.919618,141.152344,8.494105&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
    //   this.setState({
    //     weathers: data.data.list
    //   })
    // }).catch((err) => {
    //   console.log(err);
    // })
    axios.get('http://api.openweathermap.org/data/2.5/box/city?bbox=92.460937,-10.919618,141.152344,8.494105&APPID=2cd58962203b9095d5775fe5e666ee31&units=metric').then((data) => {
      store.dispatch(GetCityList(data.data.list))
    }).catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getWeatherByLocation()
    this.getListBox()
  }

  setCityName(e) {
    this.setState({cityName: e.target.value})
  }
  findWeather(city) {
    var index = store.getState().CityList.weathers.findIndex(weather => {
      if(weather.name === city) {
        return weather
      }
    })
    console.log(index)
    console.log(city)
    return store.getState().CityList.weathers[index]
  }
  render () {
    return (
      <div className="container">
        <div className="hero" data-bg-image="images/banner.png">
          <div className="container">
            <form action="#" className="find-location" onSubmit={(e) => this.getWeatherByCity(e)}>
              <input type="text" placeholder="Find your location..." onChange={(e) => this.setCityName(e)}/>
              <input type="submit" value="Find"/>
            </form>
          </div>
        </div>
        <MyForecast/>
        <main className="main-content">
          <div className="fullwidth-block">
            <div>
              <Route exact path="/redux/" render={()=><CityList/>}></Route>
              <Route exact path="/redux/:city" render={({match})=><ForecastDetail weather={this.findWeather(match.params.city)} />}></Route>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
export default ReduxOnly
