import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListVideo extends Component{
  // constructor(props){
  //   super(props)
  // }
  render() {
    return(
      <div>
        {this.props.listVideo.map((video, index)=>{
          var linkRouter = ""
          if (video.id.videoId) {
            linkRouter = "/detail/"+video.id.videoId
          } else {
            linkRouter = "/detail/"+video.id
          }
          return (
            <div key={index}>
              <Link to={linkRouter} className="list-group-item">
                <div className="list-group">
                  <div className="col-md-4">
                      <img src={video.snippet.thumbnails.medium.url} className="img-thumbnail" alt={linkRouter}/>
                  </div>
                  <div className="col-md-8">
                    <h4 className="list-group-item-heading">{video.snippet.title}</h4>
                    <div className="list-group-item-heading">Published At : {video.snippet.publishedAt}</div><br/>
                    <p className="list-group-item-text">{video.snippet.description.substring(0,400)}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListVideo
