import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeroItem extends Component {
  render() {
    const hero = this.props.hero;

    return(
      <div className="col-md-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">{ hero.localized_name }</h2>
          </div>
          <div className="panel-body">
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
              <br/>
              <Link to={{
                pathname: '/recent-matches/' + hero.id
              }} className="btn btn-primary">
                See recent matches
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroItem;
