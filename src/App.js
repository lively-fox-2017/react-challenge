import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'

import axios from 'axios'
import './App.css';

import store from './store'
import { articlesAction } from './actions/articlesAction'

import Navigation from './navigation'
import Articles from './ArticleList'
import Article from './article'
import ArticlesRedux from './ArticleListRedux'
import ArticleRedux from './ArticleRedux'
import ArticlesReactRedux from './ArticleListReactRedux'
import ArticleReactRedux from './ArticleReactRedux'

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentWillMount () {
    // axios.get('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=496adc0095e04b3e9aca4c0ad74e1e63')
    // cadangan
    axios.get('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=496adc0095e04b3e9aca4c0ad74e1e63')
    .then(({data}) => {
      // console.log(data.articles);
      this.setState({
        news: data.articles
      })

      let articles = data.articles

      store.dispatch(articlesAction(articles))
      // console.log(data);
      // console.log(this.state.news)
    }).catch((reason) => {
      console.log("ERROR ", reason);
    })
  }

  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navigation />
            <Route exact path="/" render={() => (
              <Articles news={ this.state.news } />
            )} />
            <Route exact path="/:title" render={ (match) => (
              <div>
                <Articles news={ this.state.news } />
                <Article detailArticle={this.state.news} param={match} />
              </div>
            )} />

            <Route exact path='/article/redux' render={ () => (
              <div>
                <ArticlesRedux />
                <ArticleRedux />
              </div>
            )} />

            <Route exact path='/article/reactredux' render={ () => (
              <div>
                <ArticlesReactRedux />
                <ArticleReactRedux />
              </div>
            )} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
