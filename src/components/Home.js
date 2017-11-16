import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import ReactRedux from 'react-redux'
import { createStore } from 'redux'
import nasaAPP from '../reducers/nasa'
import { getNews } from '../actions/nasa'
import { loadProgressBar } from 'axios-progress-bar'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    loadProgressBar()
    axios.get(`
    https://api.nasa.gov/planetary/apod?api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef 
    `)
    .then(res => {
      this.props.getData(res.data)
    })
    .catch(err => console.log(err))        
  }
  render () {
    return (
      <div className="home">
        { 
          this.props.showNews.map(val => (
            <div className="home-dateil">
              <h3>{val.news.title}</h3>
              <img src={val.news.url} width="50%" alt={val.news.url}/>
              <p>{val.news.explanation}</p>
              <i>{val.news.copyright}, {val.news.date}</i>
            </div>
          )) 
        }          
      </div>
    )
  }
}
const mapState = (state) => (
  { showNews: state.nasaAPI }  
)
const mapDispatch = (dispatch) => (
  { getData: (news) => dispatch(getNews(news)) }
)
const homeConnect = connect(
  mapState,
  mapDispatch
)(Home)
export default homeConnect