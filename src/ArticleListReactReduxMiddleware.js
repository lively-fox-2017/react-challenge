import React from 'react'
import { articleAction, articlesAxios } from './actions/articlesAction'
import loading from './images/loading.gif'
import { connect } from 'react-redux'


class ArticlesRedux extends React.Component {

  componentWillMount () {
    this.props.news()
  }

  setArticle (title) {
    const index = this.props.articles.findIndex((article) => {
      return article.title === title
    })

    let Article = this.props.articles[index]

    // store.dispatch(articleAction(Article))
    this.props.article(Article);
  }

  render () {
    // console.log(this.props);
    return(
      <div className="App-intro">
      { this.props.articles.length === 0 ? <img src={ loading } alt="" style={{position: 'fixed', left: 0, top: 0, width: 100+'%', height: 100+'vh'}} /> :
        <div className="list-group col-md-3 text-left" style={{height: 600+'px', overflow: 'scroll', padding: 0+'px', margin: 10+'px', border: 1+'px dashed red'}}>
          {this.props.articles.map((isiArticle, index) => {
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

const mapStateToProps = (state) => {
  // console.log('lolo',state.articlesReducer.news);
  return {
    articles: state.articlesReducer.news
  }
}

const mapDispatchToProps = (dispatch) => ({
  article: (Article) => dispatch(articleAction(Article)),
  news: () => dispatch(articlesAxios())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesRedux)
