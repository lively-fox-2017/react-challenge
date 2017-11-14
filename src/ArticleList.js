import React from 'react'
// import { link } from 'react-router-dom'

function Articles(props) {
  return (
    <div className="App-intro">
      <div className="list-group col-md-3 text-left">
        {props.news.map((isiArticle) => {
          return (
            <a className="list-group-item" to='/article/{isiArticle}'>
              <h3 className="list-group-item-heading">{ isiArticle.title }</h3> <hr style={{border: 1+'px solid red'}} />
              <p className="list-group-item-text">{ isiArticle.description.substring(0, 70) } ...</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Articles
