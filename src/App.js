import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav';
import Home from './components/Home';
import Recipee from './components/Recipee';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipees: [],
      loading: true
    };
  }

  getRecipees() {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'http://www.recipepuppy.com/api/';

    return axios.get(proxyURL + apiURL)
  }

  componentDidMount() {
    this.getRecipees()
    .then(response => {
      const recipees = response.data.results.map((recipee, idx) => {
        recipee.id = idx;
        return recipee;
      });
      this.setState({ recipees: recipees, loading: false });
    })
    .catch(err => {
      alert(err)
    })
  }

  findOne(id) {
    const recipees = this.state.recipees
    const recipee =  recipees.find(recipee => Number(id) === recipee.id)
    return recipee
  }

  render() {
    const isLoading = this.state.loading;
    const recipees = this.state.recipees;

    return (
      <Router>
        <div>
          <Nav/>
          <Route exact path='/' render={() => <Home isLoading={isLoading} recipees={recipees}/>} />
          <Route path='/recipee/:id' render={({match}) => <Recipee recipee={this.findOne(match.params.id)}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
