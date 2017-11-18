import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { getNews, getNewsOne } from './actions/index'
import {connect} from 'react-redux'
import Berita from './components/berita'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amankan: []
    }
  }

  xyz (index) {
    // let params = window.location.pathname
    // let panjangparams = Number(params[2])
    this.props.getNewsOne(index)
  }

  componentWillMount () {
    this.props.getNews()
  }
  render() {

    let cekParam = window.location.pathname.split('/')
    let params = cekParam[2]


    return (
      <Router>

      <div className="App container">
      <div>
      <div className="col-md-6">
      {this.props.news.map((data, index)=> {
        return(

          <div className="divtagborder">
          <div className="divtagborderDalam">
          <Link to={'/news/' + index}><p onClick={()=> this.xyz(index)}><b>{data.title}</b></p></Link>
          <p>{data.description}</p>
          <img className="image img-responsive" src={data.urlToImage} />
          </div>
          </div>
        )
      })}
      </div>

      <div className="col-md-6">
      <div className="divtagborder">
        <h3>Ringkasan Berita Lengkap</h3>
      </div>
      <Route exact path="/news/:id" render={(props) => ( <Berita/> )}/>
      </div>


      </div>
      </div>
      </Router>

    );
  }
}

const mapState = state => {
  return {
    news: state.news.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => dispatch(getNews()),
    getNewsOne: (panjangparams) => dispatch(getNewsOne(panjangparams))
  }
}

const gabungan = connect(
  mapState,
  mapDispatchToProps
)(App)

export default gabungan;
