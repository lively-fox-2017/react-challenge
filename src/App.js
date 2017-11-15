import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
// import MovieDetail from './MovieDetail';
// import MovieDetailReduxVanilla from './MovieDetail-redux_vanilla';
import MovieDetailReduxReact from './MovieDetail-redux_react';
import Header from './Header';
import SearchMovie from './SearchMovie';
import HotMovie from './HotMovie';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App container-fluid">
        <header className="App-header">
          <Header/>
        </header>


          <div>
            <Link to="/"> Home </Link>

            <Route exact path="/" component={ HotMovie }/>
            <Route path="/movie/:id" render={ ({match}) => {return <MovieDetailReduxReact match = {match}/>} }/>
          </div>


        <div>
          <SearchMovie/>
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
