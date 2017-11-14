import axios from 'axios';
import React, { Component } from 'react';
import MovieListFragment from './MovieListFragment';

class SearchMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      movResult: [],
    }
    this.searchFormHandler = this.searchFormHandler.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  searchResult() {
    if (this.state.search === '') {
      return (
      <div className="alert alert-info mt-2" role="alert">
        Search will be shown after you click search button
      </div>)
    }
    const listMovie = [];
    for (let movie of this.state.movResult) {
      let temp = (
        <MovieListFragment type={movie.Type} title={movie.Title} poster={movie.Poster} year={movie.Year} key={movie.imdbID}/>
      )
      listMovie.push(temp)
    }

    return listMovie;
  }

  searchFormHandler(event) {
    this.setState({
      search: event.target.value,
    })
  }

  searchMovie() {
    axios.get(`http://www.omdbapi.com/?s=${this.state.search}&apikey=d152fbcf`)
    .then(({ data }) => {
      this.setState({
        movResult: data.Search,
      })
    })
  }

  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-12"><h2><strong>Movie Search</strong></h2>
          <div className="col-md-6 offset-md-3 form-inline">
            <input onChange={this.searchFormHandler} className="form-control col-md-10" type="text"></input>
            <button onClick={this.searchMovie} className="btn btn-warning">Search</button>
          </div>

        </div>

        <div className="col-md-10 offset-md-1">
          {this.searchResult()}
        </div>

      </div>
    );
  }
}

export default SearchMovie;
