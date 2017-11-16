import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../App.css';
import { getNewsOne } from '../actions/index'
import {connect} from 'react-redux'
import App from '../App'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Berita extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panjangparams: 0
    }
  }
  componentWillMount () {
    this.props.getNewsOne()
    // let params = window.location.pathname.split('/')
    // let panjangparams = Number(params[2])
    // this.setState({panjangparams:panjangparams})
  }

  componentDidMount() {
  }

  render() {
    console.log(this.props.newsone)
    return (
      <div className="App">
      <img className="image img-responsive" src={this.props.newsone.urlToImage} />
      <p><b>{this.props.newsone.title}</b></p>
      <p>{this.props.newsone.description}</p>
      <a href={this.props.newsone.url}><p>{this.props.newsone.url}</p></a>
      </div>
    );
  }
}

const mapState = state => {
  return {
    newsone: state.news.newsone
  }
}

const mapDispatchToProps = (dispatch) => {
  let params = window.location.pathname.split('/')
  let panjangparams = Number(params[2])
  return {
    getNewsOne: () => dispatch(getNewsOne(panjangparams))
  }
}

const gabungan = connect(
  mapState,
  mapDispatchToProps
  // null
)(Berita)

export default gabungan
