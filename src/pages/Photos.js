import React from 'react'
import axios from 'axios';
class Photos extends React.Component {
  constructor(){
    super()
    this.state = {
      foto: []  
    }
  }
  componentWillMount() {
    axios.get(`
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef
    `)
    .then(res => { 
      let ft = []
      for(let i = 0;i <= 200;i++){
        ft.push(res.data.photos[i])
      }
      this.setState({ 
        foto: ft
      })
      console.log(res.data.photos)
    })
    .catch(err => console.log(err))    
  }
  render() {
    return (
      <div className="container">
          {
            this.state.foto.map(i => (
              <img class="image is-128x128" src={i.img_src} alt={i.id}/>
            ))
          }      
      </div>
    )
  }
}
export default Photos