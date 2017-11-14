import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Recipee from './Recipee';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipees: [],
      loading: true
    };
  }

  getRecipees() {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'http://www.recipepuppy.com/api/';

    return axios.get(proxyURL + apiURL)
  }

  componentDidMount() {
    this.getRecipees()
    .then(response => {
      const newState = { recipees: response.data.results, loading: false };
      this.setState(newState);
    })
    .catch(err => {
      alert(err)
    })
  }

  render() {
    const isLoading = this.state.loading;
    const recipees = this.state.recipees.map(recipee => <Recipee recipee={recipee}/>)

    return (
      <div>
        {isLoading && <h1>Loading ...</h1>}
        {!isLoading && <div>{recipees}</div>}
      </div>
    );
  }
}

export default App;
