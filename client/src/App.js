//local
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//npm
import YTSearch from 'youtube-api-search'
// import axios from 'axios'

//component
import Content from './components/Content'

const API_KEY = 'AIzaSyCa8B0c1rnbPHvSpZrglHaYs6-vgGXdxCg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {video: []}
  }
  componentWillMount() {
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
     this.setState({
       video: data
     })
    // console.log(data)
   })
  }
  render() {
    console.log(this.state.video)
    return (
      <div className="App">
          <h1>Welcome to API Youtube</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Content video={ this.state.video } />
      </div>
    );
  }
}

export default App;
