import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Home from './components/Home';
import HomeRedux from './components/HomeRedux'
import HeroRecentMatches from './components/HeroRecentMatches';

window.$openDota = axios.create({
  baseURL: 'https://api.opendota.com/api'
});

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Route exact path="/" component={HomeRedux}/>
            <Route path="/recent-matches/:id" component={HeroRecentMatches}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
