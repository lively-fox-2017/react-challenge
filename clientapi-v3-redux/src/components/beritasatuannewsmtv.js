import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../App.css';
import axios from 'axios'
// import App from '../App'
import {
  // BrowserRouter as Router,
  // Route,
  // Link
} from 'react-router-dom'

import {updateNews,updateNewsmtv} from '../actions/index'
import {connect} from 'react-redux'

class Beritasatuannewsmtv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // news: [],
      // newsmtv: [],
      satuan: []
    }
  }

  componentDidMount() {
    let params = window.location.pathname.split('/')
    let panjangparams = Number(params[2])
    var self = this;
    axios.get('https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=080e457774e54e00b8fd9315ed37c24d')
    .then(function (response) {
      const satuan = response.data.articles[panjangparams]
      self.setState({satuan})
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="tengah">
        <img className="gambar img-responsive" src={this.state.satuan.urlToImage} alt=""/>
        </div>

        <h3>{this.state.satuan.title}</h3>
        <h4>{this.state.satuan.author}</h4>
        <p>{this.state.satuan.publishedAt}</p>
        <p>{this.state.satuan.description}</p>

        <a href={this.state.satuan.url}><p>{this.state.satuan.url}</p></a>
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
)(Beritasatuannewsmtv)

export default connect(mapStateToProps)(Beritasatuannewsmtv);
