import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import HeroList from './HeroList';

const openDota = axios.create({
  baseURL: 'https://api.opendota.com/api'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      keyword: '',
      searches: []
    }
    this.search = this.search.bind(this);
  }

  fetchHeroes () {
    return openDota.get('/heroes');
  }

  componentWillMount() {
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
        <HeroList heroes={ heroList }/>
      </div>
    );
  }
}

export default App;
