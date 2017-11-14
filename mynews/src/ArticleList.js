import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'


function ArticleList (props) {
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-md-offset-3'>
        { props.Articles.map((item,idx)=>{
            return(
              <div className="panel panel-default">
                <div className="panel-body">
                  {item.title}
                  <Link to={"/" + idx}  className="btn btn-warning btn-xs">Detail</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ArticleList
