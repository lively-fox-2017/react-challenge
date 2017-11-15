import React from 'react'
import axios from 'axios'
import { createStore } from 'redux'
import nasaAPP from '../reducers/nasa'
import { getNews } from '../actions/nasa'
let store = createStore(nasaAPP)

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      news: store.getState().getNews
    }
    store.subscribe(() => {
        this.setState({
          news: store.getState().getNews
        })
    })
  }
  componentWillMount() {
    axios.get(`
    https://api.nasa.gov/planetary/apod?api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef 
    `)
    .then(res => {
      console.log(res)
      store.dispatch(getNews(res.data))
    })
    .catch(err => console.log(err))        
  }
  render () {
    return (
      <div className="home">
        { 
          store.getState().nasaAPI.map(val => (
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
export default Home