import React from 'react'

class ReactReduxContentSearch extends React.Component{
  constructor (props) {
    super(props)
    this.state={term:''}
  }
  render() {
    // console.log(this.props.video)
    return(
      <div className="search-bar">
       Search Video: <input
        type='text'
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}>
         </input>
    </div>
    )
  }
  onInputChange(term) {
    this.setState({term})
    this.props.onSearch(term)
  }
}


export default ReactReduxContentSearch
