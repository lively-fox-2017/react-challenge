import React, {Component} from 'react'

export default class Content extends Component{
  render () {
    const { test } = this.props
    return (
      <div>
        <p>Tinggi badan : {test.height}</p>
        <p>skin_color : {test.skin_color}</p>
      </div>
    )
  }
}
