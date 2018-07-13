import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RandomMovieQuote.css';
import quoteAction from './actions/quoteGenerator';

class RandomMovieQuote extends Component{
  constructor(props) {
    super(props);
    this.props.generateQuote()
  }

  render() {
    return (
      <div>
        <div className="quote-container text-muted  ">
          <div className="drop-shadow lifted rotated">
            {this.props.quoteGenerator.quote}
            <p className="text-muted"><small>-{this.props.quoteGenerator.source}-</small></p>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      quoteGenerator: state.quoteGenerator,
    }
  },
  (dispatch) => {
    return {
      generateQuote: () => {
        dispatch(quoteAction.generateQuote());
      },
    }
  }
)(RandomMovieQuote);
