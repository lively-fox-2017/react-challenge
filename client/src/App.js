//local
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom'

//npm
import YTSearch from 'youtube-api-search'

//component
import Content from './components/Content'
import VideoList from './components/VideoList'
import DetailVideo from './components/DetailVideo'


const API_KEY = 'AIzaSyCa8B0c1rnbPHvSpZrglHaYs6-vgGXdxCg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video: [],
      selectedVideo: null,
      term: ''
    }
    this.videoSearch('')
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term:term }, (data) => {
     this.setState({
       video: data,
        selectedVideo: data[0]
     })
   })
  }

  render() {
      return (
        <div className="App">
            <h1>Welcome To React Redux With Youtube API</h1>
            <img src={logo} className="App-logo" alt="logo" /><br/>
            <Link  to={'/view/'}><button>React Chalange Area</button></Link>
            <button>Redux chalange Area</button>
            <button>React Redux chalange Area</button>
            <Route exact path ={'/view/'} render={(props) => (
              <Content onSearch={term => this.videoSearch(term)}/>
            )}>
          </Route>
            <Route exact path ={'/view/' } render={(props) => (
              <DetailVideo video={this.state.selectedVideo} />
            )}>
          </Route>
          <Route exact path={'/view/'} render={(props) => (
            <VideoList
              onSelect={ selectedVideo => this.setState({ selectedVideo }) }
              videos={ this.state.video }
            />
          )}>
        </Route>
        </div>
      );
    }
}

export default App;
