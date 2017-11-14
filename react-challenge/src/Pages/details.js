import React, { Component } from 'react'
import axios from 'axios';

class Details extends Component {
    constructor(props) {
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
              <h1>
              {item.title}
              </h1>
              <img src={item.urlToImage} width="100%" alt=""/>
              <p>
              {item.description}
              </p>
              <h5>
              <small>
              author: {item.author}
              </small>
              </h5>
              <a href={item.url}>Original Article</a>
              </div>
            )
            })}
           
          </div>
        )
    }


  fetchNews(id) {
    axios.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=5fe84556b6f9491cb1d7630ec0030f8c')
    .then(({data}) => {
        console.log(data)
        data = data.articles.filter(function (el) {
			return el.title == id;
        });
        console.log(data)
      this.setState({
        items: data
      })
    })
  }

  componentDidMount() {
    this.fetchNews(this.props.match.params.id)

    console.log(this)
  }
}

export default Details