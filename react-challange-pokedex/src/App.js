import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// CSS
// import component
import Home from './components/home'
import Header from './components/header'
import Trainer from './components/trainer'

//wrapper
var Pokedex = require('pokeapi-js-wrapper');
// var P = new Pokedex.Pokedex();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route
          exact path ="/"
          render={props => <Home></Home>}
        />
        <Route
          path ="/detailPoke/:pokename"
        />
        <Route
          exact path="/trainerDetail"
          render={props => <Trainer className="grid"></Trainer>}
        />
      </div>
    );
  }

}

export default App;
