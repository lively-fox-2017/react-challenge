import React from 'react'
import store from './store'

class Article extends React.Component {
  constructor() {
    super()
    this.state = {
      article: store.getState().articleReducer.article
    }

    store.subscribe(()=>{
      this.setState({
        article: store.getState().articleReducer.article
      })
    })
  }

  render () {
    // console.log(this.state.article);
    return (
      <div>
      { this.state.article.title === undefined  ? <h2>Choose Your Article</h2> :
          <div className='col-md-8 box' style={{backgroundColor: '#eaeaea', margin: 10+'px'}}>
            <h6 className='text-left'>Authored by { this.state.article.author }</h6>
            <h2>{ this.state.article.title }</h2>
            <img src={this.state.article.urlToImage} alt="img is loading" width="100%" style={{borderRadius: 10+'px', marginBottom: 10+'px'}} />
            <p className="isi" style={{textAlign:'justify'}}>{ this.state.article.description }
              <a href={ this.state.article.url }> Complete Article Here</a>
            </p>
          </div>
      }
      </div>
    )
  }
}

export default Article
