import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import RecentMatches from './RecentMatches';

const openDota = axios.create({
  baseURL: 'https://api.opendota.com/api'
});

class HeroRecentMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      notFound: false
    };
  }

  fetchHeroById() {
    return openDota.get('/heroes');
  }

  componentWillMount() {
    this.fetchHeroById()
      .then(({ data }) => {
        this.setState({
          hero: data.filter((hero) => {
                  return hero.id === parseInt(this.props.match.params.id, 10);
                })[0] || {}
        }, () => {
          if (!this.state.hero.hasOwnProperty('id')) {
            this.setState({
              notFound: true
            })
          }
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    const hero = this.state.hero;
    if (hero.hasOwnProperty('id')) {
      return(
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">{ hero.localized_name }</h3>
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
                    <Link to="/" className="btn btn-primary">
                      Back to Home
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <h2 className="no-margin-top">Recent Matches</h2>
              <RecentMatches id={ hero.id }/>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.notFound)
      return <h1 className="text-muted text-center">Hero not found</h1>;
      
    return <h1 className="text-muted text-center">Please wait...</h1>;
  }
}

export default HeroRecentMatches;
