import React from 'react'

//Redux
import store from './store'

import CityItem from './CityItem'
/*
{store.getState().CityList.weathers.map((weather, index) => {
  return (
    <CityItem props={{weather, index}} key={index}/>
  )
})}
*/
class CityList extends React.Component {
  constructor () {
    super()
    store.subscribe(()=>{
      this.forceUpdate()
    })
  }
  render () {
    return (
      <div>
        <h2 className="section-title">Live Weathers</h2>
        <div className="row">
          {store.getState().CityList.weathers.map((weather, index) => {
            return (
              <CityItem props={{weather, index}} key={index}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CityList
