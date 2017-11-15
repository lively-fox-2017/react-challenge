import React, { Component } from 'react';
import Heroes from './components/Heroes'
import Hero from './components/Hero'
import Header from './components/Header'
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import axios from 'axios'
// import logo from './logo.svg';
// import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    };
  }

  render() {
    return (
      <Router> 
        <div className= "container">
          <Header></Header>
          <Route exact path="/" component={Heroes} />
          <Route exact path = "/hero/:id" component={Hero}/>
        </div>
      </Router>
    )
  }
}

export default App;
