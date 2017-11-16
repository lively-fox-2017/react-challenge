import React from 'react'
import store from './store'
import { articleAction } from './actions/articlesAction'
import loading from './images/loading.gif'

class ArticlesRedux extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: store.getState().articlesReducer.news
    }
    store.subscribe(() => {
      this.setState({
        articles: store.getState().articlesReducer.news
      })
    })
  }

  setArticle (title) {
    const index = this.state.articles.findIndex((article) => {
      return article.title === title
    })

    let Article = this.state.articles[index]

    store.dispatch(articleAction(Article))
  }

  render () {
    // console.log(this.state.articles);
    return (
      <div className="App-intro">
      { this.state.articles.length === 0 ? <img src={ loading } alt="" style={{position: 'fixed', left: 0, top: 0, width: 100+'%', height: 100+'vh'}} /> :
        <div className="list-group col-md-3 text-left" style={{height: 600+'px', overflow: 'scroll', padding: 0+'px', margin: 10+'px', border: 1+'px dashed red'}}>
          {this.state.articles.map((isiArticle, index) => {
            // console.log(isiArticle);
            return (
              <a className="list-group-item" onClick={ () => this.setArticle(isiArticle.title) } key={ index } style={{cursor: 'pointer'}}>
                <h3 className="list-group-item-heading">{ isiArticle.title }</h3> <hr style={{border: 1+'px solid red'}} />
                <p className="list-group-item-text">{ isiArticle.description.substring(0, 70) } ...</p>
              </a>
            )
          })}
        </div>
      }
      </div>
    )
  }
}

export default ArticlesRedux
