import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
          {this.state.items.map((item) => {
            return (
              <div>
              <a href={item.url}>
              <h1>
              {item.title}
              </h1>
              </a>
              <img src={item.urlToImage} width="100%"/>
              <p>
              {item.description}
              </p>
              <h9>
              <small>
              author: {item.author}
              </small>
              </h9>
              </div>
            )
          })}
      </div>
    );
  }

  fetchNews() {
    axios.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=5fe84556b6f9491cb1d7630ec0030f8c')
    .then(({data}) => {
      this.setState({
        items: data.articles
      })
    })
  }

  componentDidMount() {
    this.fetchNews()
    // this.state.items = [{author: 'jason', title: 'Iphone X is a hindrance', description: 'Bye Iphone X', urlToImage: ''}]
  }
}



export default App;
// 5fe84556b6f9491cb1d7630ec0030f8c