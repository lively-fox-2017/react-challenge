import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import { connect } from 'react-redux'

class ArticleListReactRedux extends Component {
  render(props){
    if(this.props.news.articles.length==0){
      return(
        <p>Loading</p>
      )
    } else{
      return(
        <div className='container'>
        <div className='row'>
        <div className='col-md-6 col-md-offset-3'>
        { this.props.news.articles.map((item,idx)=>{
          return(
            <div className="panel panel-default">
            <div className="panel-body">
            {item.title}
            <Link to={"/detail/" + idx}  className="btn btn-warning btn-xs">Detail</Link>
            </div>
            </div>
          )
        })}
        </div>
        </div>
        </div>
      )

    }
  }

}

const mapStateToProps = (state) => {
    return {
      'news' : state.News
    }
  }

export default connect(mapStateToProps,null)(ArticleListReactRedux)
