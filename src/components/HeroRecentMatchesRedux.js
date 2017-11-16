import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  requestById,
  fetchByIdNotFoundChange
} from '../actions/heroActions';
import HeroPanel from './HeroPanel';
import RecentMatchesRedux from './RecentMatchesRedux';

class HeroRecentMatchesRedux extends Component {
  componentDidMount() {
    this.props.requestById(this.props.match.params.id);
  }

  render() {
    const hero = this.props.hero;
    if (hero.hasOwnProperty('id')) {
      return(
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <HeroPanel hero={ hero }/>
            </div>
            <div className="col-md-9">
              <h2 className="no-margin-top">Recent Matches</h2>
              <RecentMatchesRedux id={ hero.id }/>
            </div>
          </div>
        </div>
      );
    }

    if (this.props.fetchByIdNotFound)
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

const mapStateToProps = (state) => {
  return {
    hero: state.heroReducer.hero,
    fetchByIdNotFound: state.heroReducer.fetchByIdNotFound
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestById: (id) => dispatch(requestById(id)),
    fetchByIdNotFoundChange: (fetchByIdNotFound) => dispatch(fetchByIdNotFoundChange(fetchByIdNotFound)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroRecentMatchesRedux);
