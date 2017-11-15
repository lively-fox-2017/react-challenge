import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import HeroRecentMatches from './components/HeroRecentMatches';

window.$openDota = axios.create({
  baseURL: 'https://api.opendota.com/api'
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/recent-matches/:id" component={HeroRecentMatches}/>
        </div>
      </Router>
    );
  }
}

export default App;
