import React from 'react'
import { Link } from 'react-router-dom'

function Articles(props) {
  return (
    <div className="App-intro">
      <div className="list-group col-md-3 text-left" style={{height: 600+'px', overflow: 'scroll', padding: 0+'px', margin: 10+'px', border: 1+'px dashed red'}}>
        {props.news.map((isiArticle, index) => {
          // console.log(isiArticle);
          return (
            <Link className="list-group-item" to={'/' + isiArticle.title} key={ index }>
              <h3 className="list-group-item-heading">{ isiArticle.title }</h3> <hr style={{border: 1+'px solid red'}} />
              <p className="list-group-item-text">{ isiArticle.description.substring(0, 70) } ...</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Articles
