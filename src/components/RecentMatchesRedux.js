import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchMatches
} from '../actions/matchActions';

const dotabuffPlayer = 'http://www.dotabuff.com/players/';
const dotabuffMatch = 'http://www.dotabuff.com/matches/';

class RecentMatchesRedux extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.$openDota.get('/heroes/' + this.props.id + '/matches')
      .then(({ data }) => {
        this.props.fetchMatches(data.slice(0, 5)); // limit only 5
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const matches = this.props.matches;
    if (matches.length) {
      return(
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>League</th>
              <th>Start Time</th>
              <th>K</th>
              <th>D</th>
              <th>A</th>
              <th>Player</th>
              <th>Match Details</th>
            </tr>
          </thead>
          <tbody>
            {
              matches.map((match) => {
                const matchTime = new Date(match.start_time * 1000);
                const dotabuffPlayerLink = dotabuffPlayer + match.account_id;
                const dotabuffMatchLink = dotabuffMatch + match.match_id;

                return(
                  <tr key={match.match_id}>
                    <td>{ match.league_name }</td>
                    <td>{ matchTime.toLocaleString() }</td>
                    <td>{ match.kills }</td>
                    <td>{ match.deaths }</td>
                    <td>{ match.assists }</td>
                    <td><a href={ dotabuffPlayerLink } target="_blank">See profile</a></td>
                    <td><a href={ dotabuffMatchLink } target="_blank">See details</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      );
    }

    return <p className="text-muted">Please wait...</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    matches: state.matchReducer.matches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatches: (matches) => dispatch(fetchMatches(matches)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentMatchesRedux);
