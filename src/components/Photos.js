import React from 'react'
import axios from 'axios'
import { createStore } from 'redux'
import nasaAPP from '../reducers/nasa'
import { getPhoto } from '../actions/nasa'
let store = createStore(nasaAPP)

class Photos extends React.Component {
  constructor() {
    super()
    this.state = {
      photo: store.getState().getPhoto
    }
    store.subscribe(() => {
        this.setState({
          news: store.getState().getPhoto
        })
    })
  }
  componentWillMount() {
    axios.get(`
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef
    `)
    .then(res => {
      store.dispatch(getPhoto(res.data.photos))
    })
    .catch(err => console.log(err))        
  }
  render () {
    return (
      <div className="home">
        { 
          store.getState().nasaAPI.map(val => (
            <img src={val.img_src} alt={val.img_src}/>
          ))
        }
      </div>
    )
  }
}
export default Photos