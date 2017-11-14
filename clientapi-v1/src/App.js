import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import {Link, Route, Router} from 'react-router'

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: [],
      newsmtv: []
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=080e457774e54e00b8fd9315ed37c24d')
    .then(function (response) {
      const news = response.data.articles
      self.setState({news})
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get('https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=080e457774e54e00b8fd9315ed37c24d')
    .then(function (responsemtv) {
      const newsmtv = responsemtv.data.articles
      self.setState({newsmtv})
      // console.log(self.state.newsmtv)
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  render() {
      var listTitle = [];
      for (var i = 0; i < this.state.news.length-5; i++) {
        listTitle.push(<div><div className="col-xs-6">
        <h5><b>{this.state.news[i].title}</b></h5>
        <p><b>{this.state.news[i].author}</b></p>
        </div>
        <div className="col-xs-6">
        <img className="gambar img-responsive" src={this.state.news[i].urlToImage} alt=""/>
        </div></div>);
      }
    return (
      <div className="App">
        <div className="container">
          <div className="col-md-6">
          {listTitle}
          </div>
          {this.state.newsmtv.map((data) => {
            return (
              <div className="col-md-6">
              <div className="col-xs-6">
              <h5><b>{data.title}</b></h5>
              <p><b>{data.author}</b></p>
              </div>
              <div className="col-xs-6">
              <img className="gambar img-responsive" src={data.urlToImage} alt=""/>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
