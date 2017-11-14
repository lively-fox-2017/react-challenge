import React, { Component } from 'react';

class HeroItem extends Component {
  render() {
    const hero = this.props.hero;

    return(
      <div className="col-md-4">
        <h2>{ hero.localized_name }</h2>
        <p>
          <span className="text-muted">Primary Attr:</span>
          <br/>
          { hero.primary_attr.toUpperCase() }
          <br/>
          <span className="text-muted">Type:</span>
          <br/>
          { hero.attack_type }
          <br/>
          <span className="text-muted">Roles:</span>
          <br/>
          { hero.roles.join(', ') }
          <br/>
        </p>
      </div>
    );
  }
}

export default HeroItem;
