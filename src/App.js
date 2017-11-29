import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { setRecipees } from './actions/RecipeeActions';

import Nav from './components/Nav';
import Home from './components/Home';
import Recipee from './components/Recipee';
import Restaurant from './components/RestaurantList';

import './App.css';

class App extends Component {
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

      store.dispatch(setRecipees(recipees));
    })
    .catch(err => {
      alert(err)
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/restaurants' component={Restaurant}/>
            <Route path='/recipee/:id' component={Recipee} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
