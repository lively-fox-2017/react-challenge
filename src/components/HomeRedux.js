import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchHeroes, keywordChange, fetchSearches, notFoundChange
} from '../actions/heroActions';
import HeroList from './HeroList';

class HomeRedux extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    window.$openDota.get('/heroes')
      .then(({ data }) => {
        this.props.fetchHeroes(data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  search(e) {
    this.props.keywordChange(e.target.value);

    const searches = this.props.heroes.filter((hero) => {
      const regex = new RegExp("[a-z]*(" + this.props.keyword.toLowerCase() + ")[a-z]*", "ig");
      return regex.test(hero.localized_name.toLowerCase())
    });

    this.props.fetchSearches(searches);

    if (!this.props.searches.length) {
      this.props.notFoundChange(true);
    }
  }

  render() {
    const heroList = this.props.keyword.length ?
                     this.props.searches :
                     this.props.heroes;

    return (
      <div className="container">
        <h1>Dota Heroes</h1>
        <hr/>
        <input type="text" className="form-control" placeholder="Search for heroes..." autoComplete="off" onChange={ this.search }/>
        <br/>
        <HeroList heroes={ heroList } notFound={ this.props.notFound }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroReducer.heroes,
    keyword: state.heroReducer.keyword,
    searches: state.heroReducer.searches,
    notFound: state.heroReducer.notFound,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroes: (heroes) => dispatch(fetchHeroes(heroes)),
    keywordChange: (keyword) => dispatch(keywordChange(keyword)),
    fetchSearches: (searches) => dispatch(fetchSearches(searches)),
    notFoundChange: (notFound) => dispatch(notFoundChange(notFound)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeRedux);
