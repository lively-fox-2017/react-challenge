import React from 'react'

import CityItem from './CityItem'

class CityList extends React.Component {
  render () {
    return (
      <div>
        <h2 className="section-title">Live Weathers</h2>
        <div className="row">
          {this.props.weathers.map((weather, index) => {
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
