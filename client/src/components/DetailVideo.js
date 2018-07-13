import React, { Component } from 'react'

class DetailVideo extends Component{
  render() {
    const link = "http://www.youtube.com/embed/" + this.props.match.params.id
    // console.log('ini link maning', link);
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item">
            <iframe title="video" width="720" height="420" type="text/html" src={link} frameBorder="0"></iframe>
          </li>
      </ul>
      </div>
    )
  }
}

export default DetailVideo
