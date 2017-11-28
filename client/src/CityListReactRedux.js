import React from 'react'
import { connect } from 'react-redux'

import CityItemReactRedux from './CityItemReactRedux'

class CityListReactRedux extends React.Component {
  render () {
    return (
      <div>
        <h2 className="section-title">Live Weathers</h2>
        <div className="row">
          {this.props.CityList.weathers.map((weather, index) => {
            return (
              <CityItemReactRedux props={{weather, index}} key={index}/>
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
