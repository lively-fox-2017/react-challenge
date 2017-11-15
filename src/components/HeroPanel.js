import React from 'react';
import { Link } from 'react-router-dom';

const HeroPanel = (props) => {
  const hero = props.hero;
  const button = (
    (props.button === 'recent-matches') ?
      <Link to={{
        pathname: '/recent-matches/' + hero.id
      }} className="btn btn-primary">
        See recent matches
      </Link> :
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
  );

  return (
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
          { button }
        </p>
      </div>
    </div>
  );

};

export default HeroPanel;
