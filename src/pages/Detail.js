import React from 'react'
class Detail extends React.Component {
  constructor(props) {
    super(props)
    let match = props.match
    this.state = {
      id: match.params.id
    }
  }
  render() {
   return (
    <div>
        <h1>Detail page</h1>
        { this.state.id }
    </div>
   ) 
  }
}
export default Detail