import React, { Component } from 'react';
import HeroPanel from './HeroPanel';

class HeroItem extends Component {
  render() {
    return(
      <div className="col-md-4">
        <HeroPanel hero={ this.props.hero } button='recent-matches'/>
      </div>
    );
  }
}

export default HeroItem;
