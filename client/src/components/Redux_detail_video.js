import React from 'react'

const Redux_detail_video = ({video}) => {
  if(video.length === 0) {
    return <div>Please Wait ......</div>
  }
    console.log('ini video dari videodetail', video[0].id.videoId)

  const videoId = video[0].id.videoId
  // console.log('ini',video)
  const url = `https://www.youtube.com/embed/${videoId}`

   return (
     <div className="video-detail col-md-8">
       <div className="embed-responsive embed-responsive-16by9">
          <iframe className ="embed-responsive-item" src={url}></iframe>
       </div>
       <div className="details">
         <div>{ video[0].snippet.title }</div>
         <div>{ video[0].snippet.decription }</div>
       </div>
     </div>
   )
}

export default Redux_detail_video
