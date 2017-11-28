import { combineReducers } from 'redux'

import CityList from './CityList'
import MyWeather from './MyWeather'

const rootReducer = combineReducers({
  CityList,
  MyWeather
})

export default rootReducer
