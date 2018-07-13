import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './components/Home'
import Category from './components/Category'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import DetailVideo from './components/DetailVideo'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Watch the popular video</h1>
            </header>
            <Navigation/>

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/category" component={Category}></Route>
          <Route exact path="/detail/:id" component={DetailVideo}></Route>

        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
