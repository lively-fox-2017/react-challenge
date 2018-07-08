import React from 'react'

const VideoDetail = ({video}) => {
  // console.log('ini video dari videodetail', video)
  if(!video) {
    return <div>Please Wait ......</div>
  }
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
   return (
     <div className="video-detail col-md-8">
       <div className="embed-responsive embed-responsive-16by9">
          <iframe className ="embed-responsive-item" src={url}></iframe>
       </div>
       <div className="details">
         <div>{ video.snippet.title }</div>
         <div>{ video.snippet.decription }</div>
     </div>
   </div>
   )
}

export default VideoDetail
