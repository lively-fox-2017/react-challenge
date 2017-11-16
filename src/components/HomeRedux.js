import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchHeroes, requestHeroes, keywordChange, fetchSearches, searchNotFoundChange
} from '../actions/heroActions';
import HeroList from './HeroList';

class HomeRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.props.requestHeroes();
  }

  search(e) {
    this.setState({
      keyword: e.target.value
    }, () => {
      const searches = this.props.heroes.filter((hero) => {
        const regex = new RegExp("[a-z]*(" + this.state.keyword + ")[a-z]*", "ig");
        return regex.test(hero.localized_name.toLowerCase())
      });

      this.props.fetchSearches(searches);

      if (!this.props.searches.length) {
        this.props.searchNotFoundChange(true);
      }
    });
  }

  render() {
    const heroList = this.state.keyword.length ?
                     this.props.searches :
                     this.props.heroes;

    return (
      <div className="container">
        <h1>Dota Heroes</h1>
        <hr/>
        <input type="text" className="form-control" placeholder="Search for heroes..." autoComplete="off" onChange={ this.search }/>
        <br/>
        <HeroList heroes={ heroList } searchNotFound={ this.props.searchNotFound }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroReducer.heroes,
    searches: state.heroReducer.searches,
    searchNotFound: state.heroReducer.searchNotFound,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroes: (heroes) => dispatch(fetchHeroes(heroes)),
    requestHeroes: () => dispatch(requestHeroes()),
    fetchSearches: (searches) => dispatch(fetchSearches(searches)),
    searchNotFoundChange: (searchNotFound) => dispatch(searchNotFoundChange(searchNotFound)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeRedux);
