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
      poster: '',
      released: '',
    }
  }

  fetchMovieById() {
    let link = 'http://www.omdbapi.com/?i=tt1856101&apikey=d152fbcf'
    // console.log(this.props.match.params.id);
    if (this.props.match.params.hasOwnProperty('id')) {
      link = `http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=d152fbcf`;
    }
    axios.get(link)
    .then(({ data }) => {
      console.log('------2');
      // console.log(data.Response);
      if (data.Response !== false) {

          console.log('------3');
        this.setState({
          title: data.Title,
          actors: data.Actors,
          director: data.Director,
          genre: data.Genre,
          poster: data.Poster,
          released: data.Released,
        })
      }

    })
  }

  componentDidMount() {
    this.fetchMovieById();
    console.log('------1',this.props.match.params);
    // if (this.props.match.params)
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-left">{this.state.title}</h2>
        <div className="row">
          <div className="col-md-4">
            <img  src={this.state.poster} alt={this.state.poster}></img>
          </div>

          <div className="col-md-5">
            <ul  className="list-group">
              <li className="text-left list-group-item"><strong>Director: </strong> {this.state.director}</li>
              <li className="text-left list-group-item"><strong>Actors: </strong> {this.state.actors}</li>
              <li className="text-left list-group-item"><strong>Genre: </strong> {this.state.genre}</li>
              <li className="text-left list-group-item"><strong>Released Date: </strong> {this.state.released}</li>
            </ul>
          </div>

          <div className="col-md-3">
            Ads
            <img width="100%" src="http://www.designyourway.net/blog/wp-content/uploads/2010/11/Nike-Print-Ads-12.jpg"></img>
          </div>

        </div>

      </div>
    )
  }
}

export default MovieDetail;
