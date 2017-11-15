import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeroPanel from './HeroPanel';
import RecentMatches from './RecentMatches';

class HeroRecentMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      notFound: false
    };
  }

  fetchHeroById() {
    return window.$openDota.get('/heroes');
  }

  componentDidMount() {
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
              <HeroPanel hero={ hero }/>
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
      return (
        <div className="text-center">
          <h1 className="text-muted text-center">Hero not found</h1>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      );

    return <h1 className="text-muted text-center">Please wait...</h1>;
  }
}

export default HeroRecentMatches;
