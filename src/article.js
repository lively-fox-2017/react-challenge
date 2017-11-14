import React from 'react'
import loading from './images/loading.gif'

function Article (props) {

  const index = props.detailArticle.findIndex((article) => {
    return article.title === props.param.match.params.title
  })

  // console.log('----------------------okokok', props.detailArticle);

  const article = props.detailArticle[index]

  console.log(article);
  // console.log(props.detailArticle);
  // console.log(props.param.match.params.title);
  return (
    <div>
    { article === undefined ? <img src={ loading } alt="" style={{position: 'fixed', left: 0, top: 0, width: 100+'%', height: 100+'vh'}} /> :
        <div className='col-md-8 box' style={{backgroundColor: '#eaeaea', margin: 10+'px'}}>
          <h6 className='text-left'>Authored by { article.author }</h6>
          <h2>{ article.title }</h2>
          <img src={article.urlToImage} alt="" width="100%" style={{borderRadius: 10+'px', marginBottom: 10+'px'}} />
          <p className="isi" style={{textAlign:'justify'}}>{ article.description }
            <a href={ article.url }> Complete Article Here</a>
          </p>
        </div>
    }
    </div>
  )
}

export default Article
