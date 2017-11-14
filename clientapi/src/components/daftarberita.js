import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import axios from 'axios'
import App from '../App'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Daftarberita extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      newsmtv: [],
      newsone: []
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        {this.props.news.map((data, index) => {
          return (
            <div className="col-md-6">
            <div className="col-xs-6">
            <h5><Link to={'/news/' + index}><b>{data.title}</b></Link></h5>
            <p><b>{data.author}</b></p>
            </div>
            <div className="col-xs-6">
            <img className="gambar img-responsive" src={data.urlToImage} alt=""/>
            </div>
            </div>
          )
        })}
          {this.props.newsmtv.map((data, index) => {
            return (
              <div className="col-md-6">
              <div className="col-xs-6">
              <h5><Link to={'/newsmtv/' + index}><b>{data.title}</b></Link></h5>
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

export default Daftarberita;
