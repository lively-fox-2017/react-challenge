import React from 'react'

class Content extends React.Component{
  render() {
    // console.log(this.props.video)
    return(
      <div>
      Video Search: <input type='text' placeholder='Input Your Video Here'></input>
      <button type='button'> Submit  </button>
    </div>
    )
  }
}


export default Content
