import React from 'react'
import { connect } from 'react-redux'

import CityItem from './CityItem'
/*
{store.getState().CityList.weathers.map((weather, index) => {
  return (
    <CityItem props={{weather, index}} key={index}/>
  )
})}
*/
class CityListReactRedux extends React.Component {
  render () {
    return (
      <div>
        <h2 className="section-title">Live Weathers</h2>
        <div className="row">
          {this.props.CityList.weathers.map((weather, index) => {
            return (
              <CityItem props={{weather, index}} key={index}/>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    'CityList': state.CityList
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityListReactRedux)
