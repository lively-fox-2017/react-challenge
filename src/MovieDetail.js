import React, { Component } from 'react';
import axios from 'axios';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      actors: '',
      director: '',
      genre: '',
    }
  }

  fetchMovieByTitle() {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d152fbcf')
    .then(({ data }) => {

      this.setState({
        title: data.Title,
        actors: data.Actors,
        director: data.Director,
        genre: data.Genre,
      })
    })
  }

  componentDidMount() {
    this.fetchMovieByTitle();
  }

  render() {
    return (
      <div>
        <h1>asd</h1>
        {this.state.title}
        {this.state.actors}
        {this.state.director}
        {this.state.genre}
      </div>
    )
  }
}

export default MovieDetail;
