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

    if (this.props.notFound)
      return <p className="text-muted">Not found</p>
    return <p className="text-muted">Please Wait...</p>
  }
}

export default HeroList;
