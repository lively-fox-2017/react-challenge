import React, { Component } from 'react'
import axios from 'axios'
import { link } from 'react-router-dom'



let marginRight = { marginRight: '6px'}
let marginStyle = { marginBottom: '10px'}
 

class Heroes extends Component {
  constructor (){
    super()
    this.state ={
      heroes: []
    }
  }

  render() {
    return (
      <div className="row">
        {this.props.heroes.map(hero => {
          let img = 'https://api.opendota.com' + hero.img
          return (
            <div
              className="col-sm-4 col-md-3"
              style={marginStyle}
              key={hero.id}>

              <div className="card text-center">
                <img className="card-img-top" src={img} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">{hero.localized_name}</h4>
                  {hero.roles.map((role, index) => {
                    return (
                      <span
                        key={index}
                        style={marginRight}
                        className="badge badge-danger">
                        {role}
                      </span>
                    )
                  })}
                  <p className="card-text">
                    Some quick example text .
                  </p>
                  <a href="" className="btn btn-primary">
                    Details
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    const self = this
    axios.get('https://api.opendota.com/api/heroStats')
    .then(response =>{
      let data = response.data
      console.log(data)
      self.setState({
        heroes: data
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }

}

export default Heroes
