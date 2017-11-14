import React, { Component } from 'react';

class MovieListFragment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="media mt-1">
        <img className="d-flex mr-3 col-md-2" src={this.props.poster} alt=""/>
        <div className="media-body text-left">
          <h3 className="mt-0">{this.props.title}</h3>
          <h5> {this.props.type}</h5>
          <h5>Year: {this.props.year}</h5>
        </div>
      </div>
    );
  }
}

export default MovieListFragment;
