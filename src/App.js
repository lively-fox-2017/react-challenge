import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentWillMount () {
    axios.get('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=496adc0095e04b3e9aca4c0ad74e1e63')
    .then(({data}) => {
      // console.log(data.articles);
      this.setState({
        news: data.articles
      })
      // console.log(data);
      console.log(this.state.news)
    }).catch((reason) => {
      console.log("ERROR ", reason);
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <img src={logo} className="App-logo" alt="logo" />
              <span style={{fontSize: 28 + 'px', color: 'white'}}>News Site boy</span>
            </div>
          </div>
        </nav>

        <div className="App-intro">
          <div className="list-group col-md-3 text-left">
            {this.state.news.map((article) => {
              return (
                <a href="#" className="list-group-item">
                  <h3 className="list-group-item-heading">{ article.title }</h3>
                  <p className="list-group-item-text">{ article.description.substring(0, 70) } ...</p>
                </a>
              )
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
