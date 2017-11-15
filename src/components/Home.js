import React, { Component } from 'react';

import HeroList from './HeroList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      keyword: '',
      searches: [],
      notFound: false
    }
    this.search = this.search.bind(this);
  }

  fetchHeroes () {
    return window.$openDota.get('/heroes');
  }

  componentDidMount() {
    this.fetchHeroes()
      .then(({ data }) => {
        this.setState({
          heroes: data
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  search(e) {
    this.setState({
      keyword: e.target.value
    }, () => {
      this.setState({
        searches: this.state.heroes.filter((hero) => {
          const regex = new RegExp("[a-z]*(" + this.state.keyword.toLowerCase() + ")[a-z]*", "ig");
          return regex.test(hero.localized_name.toLowerCase())
        })
      }, () => {
        if (!this.state.searches.length) {
          this.setState({
            notFound: true
          });
        }
      });
    })
  }

  render() {
    const heroList = this.state.keyword.length ?
                     this.state.searches :
                     this.state.heroes;

    return (
      <div className="container">
        <h1>Dota Heroes</h1>
        <hr/>
        <input type="text" className="form-control" placeholder="Search for heroes..." autoComplete="off" onChange={ this.search }/>
        <br/>
        <HeroList heroes={ heroList } notFound={ this.state.notFound }/>
      </div>
    );
  }
}

export default Home;
