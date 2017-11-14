import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      copyright: '',
      date: '',
      explanation: '',
      title: '',
      imgUrl: ''
    }
  }
  componentWillMount() {
    axios.get(`
    https://api.nasa.gov/planetary/apod?api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef 
    `)
    .then(res => { 
      console.log(res.data)
      this.setState({ 
        copyright: res.data.copyright,
        date: res.data.date,
        explanation: res.data.explanation,
        title: res.data.title,
        imgUrl: res.data.url
      })
    })
    .catch(err => console.log(err))    
  }
  render() {
    return (
      <div className="container">
        <h2>{this.state.title}</h2>
        <img width="50%" src={this.state.imgUrl} alt={this.state.url}/>
        <p>{this.state.explanation}</p>
        <i>{this.state.date}</i>
      </div>
    )
  }
}
export default Home