import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import {Link, Route, Router} from 'react-router'
import Daftarberita from './components/daftarberita'
import Beritasatuannews from './components/beritasatuannews'
import Beritasatuannewsmtv from './components/beritasatuannewsmtv'
import {
  BrowserRouter as Router,
  Route
  // Link
} from 'react-router-dom'
import {updateNews,updateNewsmtv} from './actions/index'
import {connect} from 'react-redux'

class App extends Component {
  // constructor(props) {
    // super(props)
    // this.state = {
    //   news: [],
    //   newsmtv: []
    // }
  // }


  componentWillMount() {
    var self = this;
    axios.get('https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=080e457774e54e00b8fd9315ed37c24d')
    .then(function (response) {
      const news = response.data.articles
      self.props.updateNews(news)
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get('https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=080e457774e54e00b8fd9315ed37c24d')
    .then(function (responsemtv) {
      const newsmtv = responsemtv.data.articles
      self.props.updateNewsmtv(newsmtv)
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
        <Route exact path="/" render={(props) => ( <Daftarberita/> )} />
        <Route exact path="/news/:id" render={(props) => ( <Beritasatuannews news={this.props.news}/> )}/>
        <Route exact path="/newsmtv/:id" render={(props) => ( <Beritasatuannewsmtv/> )}/>
        </div>
        </Router>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // alert(JSON.stringify(state.news))
  // console.log(state)
  return {
    news: state.news,
    newsmtv: state.newsmtv

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNews: (params) => dispatch(updateNews(params)),
    updateNewsmtv: (params) => dispatch(updateNewsmtv(params))
  }
}

const gabungan = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default gabungan;
