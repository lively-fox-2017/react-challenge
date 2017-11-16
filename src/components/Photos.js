import React from 'react'
import axios from 'axios'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import nasaAPI from '../reducers/nasa'
import { getPhoto } from '../actions/nasa'

class Photos extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    axios.get(`
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef
    `)
    .then(res => {
      this.props.getData(res.data.photos)
    })
    .catch(err => console.log(err))        
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
}
const mapState = (state) => (
  { showFoto: state.nasaAPI }
)
const mapDispatch = (dispatch) => (
  { getData: (photos) => dispatch(getPhoto(photos))}
)
const photoConnect = connect(mapState, mapDispatch)(Photos)
export default photoConnect