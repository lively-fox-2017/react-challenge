import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import ArticleList from './ArticleList'
import ArticleItem from './ArticleItem'

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles:[]
    }
  }


  componentDidMount() {
    axios.get('https://newsapi.org/v1/articles?source=ign&apiKey=58adf3a0fbb940bf8cf2f688c308ef7e')
    .then(({data})=>{
      this.setState({articles:data.articles})
    }).catch(err=>{
      console.error(err);
    })
  }

  datadetail(props){
    return this.state.articles[props.match.params.id]
    // console.log(this.state.articles[props.match.params.id]);
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div class="btn-group btn-group-justified">
        <Link to="/" className ="btn btn-default">Home</Link>
      </div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Game News</h1>
        </header>
          <Route exact path="/" component={ ()=>
            <ArticleList Articles = {this.state.articles} />}
          />
          <Route exact path="/:id" component={(props)=>
            <ArticleItem Article = {this.datadetail(props)} />}
          />
      </div>
      </Router>
    );
  }
}

export default App;
