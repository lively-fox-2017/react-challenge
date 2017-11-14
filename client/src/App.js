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
    this.videoSearch('taylorswift')
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
    console.log(this.state.video)
      return (
        <div className="App">
            <h1>Welcome to API Youtube</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Content onSearch={term => this.videoSearch(term)}/>
            <Route exact path ='/view' render={(props) => (
              <DetailVideo video={this.state.selectedVideo} />
            )}>
            </Route>
            <VideoList
              onSelect={ selectedVideo => this.setState({ selectedVideo }) }
              videos={ this.state.video }
            />
        </div>
      );
    }
}

export default App;
