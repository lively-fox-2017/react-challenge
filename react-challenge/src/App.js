import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/home'
import logo from './logo.svg';
import './App.css';
import Details from './Pages/details'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome to React News'
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <BrowserRouter>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/home/:id" component={Details}/>
        </div>
        </BrowserRouter>
      </div>
    );
  }

}



export default App;