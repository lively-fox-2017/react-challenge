import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

// const data=[1,2,3,4,5,6]

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles:[]
    }
  }


  componentDidMount() {
    axios.get('https://newsapi.org/v1/articles?source=ign&apiKey=58adf3a0fbb940bf8cf2f688c308ef7e')
    .then(({data})=>{
      this.setState({articles:data.articles})
    }).catch(err=>{
      console.error(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Game News</h1>
        </header>
        <ul>
          { this.state.articles.map((item)=>{
            return (
              <li>{item.description} </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
