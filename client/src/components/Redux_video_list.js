import React from 'react'
import Redux_video_list_item from './Redux_video_list_item'
import { Link } from 'react-router-dom'

const Redux_video_list = (props) => {
  const videoItems = props.videos.map((video) => {
    // console.log('ini adalah props videolist',video.etag)
    // let routerTo = `/view/:${video.etag}`
    return <div><Link to={'/redux/'} > <Redux_video_list_item
      onSelect={ props.onSelect }
      key={ video.etag }
      video={video} />
    </Link>
    </div>
  })
  // console.log(videoItems);
  return (
    <ul className='col-md-4 list-group'>
      {  videoItems }
    </ul>
  )
}

export default Redux_video_list
