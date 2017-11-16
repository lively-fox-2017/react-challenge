import React from 'react'
import axios from 'axios'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import nasaAPI from '../reducers/nasa'
import { allPhotoFromAPI } from '../actions/nasa'

class Photos extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className="home">
        { 
          this.props.showFoto.map(val => (
            <img src={val.img_src} alt={val.img_src}/>
          ))
        }
      </div>
    )
  }
  componentDidMount() {
    this.props.getData()
  }
}
const mapState = (state) => (
  { showFoto: state.nasaAPI }
)
const mapDispatch = (dispatch) => (
  { getData: () => dispatch(allPhotoFromAPI())}
)
const photoConnect = connect(mapState, mapDispatch)(Photos)
export default photoConnect