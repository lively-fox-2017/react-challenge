import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from './App';

class MovieListFragment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="media mt-1">
        <img className="d-flex mr-3 col-md-2" src={this.props.poster} alt=""/>
        <div className="media-body text-left">

            <div>
            <Link to={`/movie/${this.props.id}`}><h3 className="mt-0">{this.props.title}</h3></Link>
            </div>

          <h5> {this.props.type}</h5>
          <h5>Year: {this.props.year}</h5>
        </div>
      </div>
    );
  }
}

export default MovieListFragment;
