import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import {Link, Route, Router} from 'react-router'
import Daftarberita from './components/daftarberita'
import Beritasatuannews from './components/beritasatuannews'
import Beritasatuannewsmtv from './components/beritasatuannewsmtv'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import { BrowserRouter, Route, Link } from 'react-router-dom'
// var browserRouter = require('react-router-dom').BrowserRouter
// var route = require('react-router-dom').Route
// var link = require('react-router-dom').Link

class App extends Component {
  constructor(props) {
    super(props)
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
      // console.log(self.state.news)
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
    return (
      <div className="App">
        <div className="container">

        <Router>
        <div>
        <Route exact path="/" render={(props) => ( <Daftarberita news={this.state.news} newsmtv={this.state.newsmtv}/> )} />
        <Route exact path="/news/:id" render={(props) => ( <Beritasatuannews news={this.state.news}/> )}/>
        <Route path="/newsmtv/:id" render={(props) => ( <Beritasatuannewsmtv newsmtv={this.state.news}/> )}/>
        </div>
        </Router>

        </div>
      </div>
    );
  }
}

export default App;
