import React from 'react'

const Redux_video_list_item = ({video, onSelect}) => {
  // console.log('ini dari video lis item', video.length)
  const imageUrl = video.snippet.thumbnails.default.url
  return (
     <li onClick={() => onSelect(video)} className="list-group-item">
       <div className="video-list media">
         <div className="media-left">
           <img className="media-object" src={imageUrl} alt="list"></img>
           </div>
          <div className="media-body">
            <div className="media-heading"> { video.snippet.title } </div>
        </div>
       </div>
     </li>
  )
}

export default Redux_video_list_item
