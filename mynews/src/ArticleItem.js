import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'


function ArticleItem (props) {
  console.log(props.Article);
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
              <div className="panel panel-default">
                <div className="panel-body">
                  <h2>{props.Article.title}</h2>
                  <img className="img-responsive" src={props.Article.urlToImage} alt=""/>
                  <br/>
                  <p>{props.Article.description}</p>

                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
