import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      explanation: '',
      url: '',
      title: ''
    }
  }
  componentWillMount() {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef')
    .then(res => { 
      console.log(res.data) 
      this.setState({ 
        date: res.data.date,
        title: res.data.title,
        explanation: res.data.explanation,
        url: res.data.url 
      }) 
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Nasa Data Portal</h1>
        </header>
        
        <p className="App-intro">
          <h3>{this.state.title}</h3>
          <p>{this.state.explanation}</p>
          <img src={this.state.url} alt="{this.state.url}"/>
          <br/>
          <i>{this.state.date}</i>
        </p>
      </div>
    );
  }
}

export default App;
