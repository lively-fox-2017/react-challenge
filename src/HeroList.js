import React, { Component } from 'react';
import HeroItem from './HeroItem';

class HeroList extends Component {
  render() {
    if (this.props.heroes.length) {
      return(
        <div className="row">
          {
            this.props.heroes.map((hero) => {
              return(
                <HeroItem hero={ hero } key={ hero.id }/>
              );
            })
          }
        </div>
      );
    }

    return <h1>Please Wait...</h1>
  }
}

export default HeroList;
