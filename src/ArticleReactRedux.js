import React from 'react'
import { connect } from 'react-redux'

class Article extends React.Component {

  render () {
    // console.log(this.props.article);
    return (
      <div>
      { this.props.article.title === undefined  ? <h2>Choose Your Article</h2> :
          <div className='col-md-8 box' style={{backgroundColor: '#eaeaea', margin: 10+'px'}}>
            <h6 className='text-left'>Authored by { this.props.article.author }</h6>
            <h2>{ this.props.article.title }</h2>
            <img src={this.props.article.urlToImage} alt="img is loading" width="100%" style={{borderRadius: 10+'px', marginBottom: 10+'px'}} />
            <p className="isi" style={{textAlign:'justify'}}>{ this.props.article.description }
              <a href={ this.props.article.url }> Complete Article Here</a>
            </p>
          </div>
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.articleReducer.article);
  return {
    article: state.articleReducer.article
  }
}

export default connect(mapStateToProps, null)(Article)
