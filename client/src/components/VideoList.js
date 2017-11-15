import React from 'react'
import VideoListItem from './VideoListItem'
import { Link } from 'react-router-dom'
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    console.log('ini adalah props videolist',video.id.videoId)
    // let routerTo = `/view/:${video.etag}`
    return <div><Link to={'/view/'} > <VideoListItem
      onSelect={ props.onSelect }
      key={ video.etag }
      video={video} />
    </Link>
    </div>
  })
  console.log(videoItems);
  return (
    <ul className='col-md-4 list-group'>
      {  videoItems }
    </ul>
  )
}

export default VideoList
