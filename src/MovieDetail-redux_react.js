import React, { Component } from 'react';
import axios from 'axios';
import {  connect } from 'react-redux';
import store from './store/store';
import movieActions from './actions/movie';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  fetchMovieById() {
    if (this.props.det.movieReducer.id != this.props.match.params.id) {
      let link = 'http://www.omdbapi.com/?i=tt1856101&apikey=d152fbcf'
      if (this.props.match.params.hasOwnProperty('id')) {
        link = `http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=d152fbcf`;
      }
      axios.get(link)
      .then(({ data }) => {
        if (data.Response !== false) {
          const detail = {
            title: data.Title,
            actors: data.Actors,
            director: data.Director,
            genre: data.Genre,
            poster: data.Poster,
            released: data.Released,
            id: data.imdbID,
          }
          this.props.updateDetail(detail);
        }

      })
    }

  }

  render() {
    this.fetchMovieById();
    return (
        <div className="container mt-4">
        <br/>
          <h2 className="text-left">{this.props.det.movieReducer.title}</h2>
          <div className="row">
            <div className="col-md-4">
              <img  src={this.props.det.movieReducer.poster} alt={this.props.det.movieReducer.poster}></img>
            </div>

            <div className="col-md-5">
              <ul  className="list-group">
                <li className="text-left list-group-item"><strong>Director: </strong> {this.props.det.movieReducer.director}</li>
                <li className="text-left list-group-item"><strong>Actors: </strong> {this.props.det.movieReducer.actors}</li>
                <li className="text-left list-group-item"><strong>Genre: </strong> {this.props.det.movieReducer.genre}</li>
                <li className="text-left list-group-item"><strong>Released Date: </strong> {this.props.det.movieReducer.released}</li>
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

export default connect(
  (state) => {
    return {
      det: state
    }
  },
  (dispatch) => {
    return {
      updateDetail: (detail) => {
        dispatch(movieActions.UPDATE_DATA(detail))
      }
    }
  }
)(MovieDetail)

// export default MovieDetail;
