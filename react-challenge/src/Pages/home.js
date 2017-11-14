import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div>
            {this.state.items.map((item) => {
            return (
              <div>
              <Link to={`/home/${item.title}`}>
              <h1>
              {item.title}
              </h1>
              </Link>
              <img src={item.urlToImage} width="100%" alt=""/>
              </div>
            )
            })}
           
          </div>
        )
    }


  fetchNews() {
    axios.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=5fe84556b6f9491cb1d7630ec0030f8c')
    .then(({data}) => {
      this.setState({
        items: data.articles
      })
    })
  }

  componentDidMount() {
    this.fetchNews()
  }
}

export default Home