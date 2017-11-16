import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Content extends Component {
  render () {
    return (
      <Link className="list-group-item" to={ {
        pathname: `/${this.props.dataHero.heroKey}`,
        state: { dataActiveHero: this.props.dataHero.hero }
      } }>
        { this.props.dataHero.hero.name }
      </Link>
    )
  }
}

export default Content
