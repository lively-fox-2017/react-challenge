//local
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom'
import store from './store/index'
import { video as videoact, term as termact, selectedVideo as selectVideoact } from './actions/ReduxVideo'

//npm
import YTSearch from 'youtube-api-search'

//component
import Content from './components/Content'
import VideoList from './components/VideoList'
import DetailVideo from './components/DetailVideo'

//component Redux chalange
import Redux_content_search from './components/Redux_content_search'
import Redux_detail_video from './components/Redux_detail_video'
import Redux_video_list from './components/Redux_video_list'


const API_KEY = 'AIzaSyCa8B0c1rnbPHvSpZrglHaYs6-vgGXdxCg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video: [],
      selectedVideo: null,
      term: '',
      videoRedux: store.getState().video.videos,
      termRedux: store.getState().video.term,
      selectedVideoRedux: store.getState().video.selectedVideo
    }
    store.subscribe(()=>{
      this.setState({
        termRedux: store.getState().video.term,
        videoRedux: store.getState().video.videos,
        selectedVideoRedux: store.getState().video.selectedVideo
      })
    })
    this.videoSearch('')
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term:term }, (data) => {
     this.setState({
       video: data,
      // selectedVideo: data[0],
     })
     store.dispatch(termact(term))
     store.dispatch(videoact(data))
     store.dispatch(selectVideoact(this.state.selectedVideo))
   })
  }

  render() {
      return (
        <div className="App">
            <h1>Welcome To React Redux With Youtube API</h1>
            <img src={logo} className="App-logo" alt="logo" /><br/>
            <Link  to={'/view/'}><button>React Chalange Area</button></Link>
            <Link to={'/redux/'}><button>Redux chalange Area</button></Link>
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
            <Route exact path ={'/redux/'} render={(props) => (
              <Redux_content_search onSearch={(term) => this.videoSearch(term)}/>
            )}>
          </Route>
            <Route exact path ={'/redux/' } render={(props) => (
              <Redux_detail_video video={this.state.selectedVideoRedux} />
            )}>
          </Route>
          <Route exact path={'/redux/'} render={(props) => (
            <Redux_video_list
              onSelect={ selectedVideo => this.setState({ selectedVideo }) }
              videos={ this.state.videoRedux }
            />
          )}>
        </Route>
        </div>
      );
    }
}

export default App;
