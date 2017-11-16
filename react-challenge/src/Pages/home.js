import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { 
  fetchNews
} from '../actions/index'

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div className="col-md-8" style={{margin: 'auto'}}>
            {this.props.items.articles !== undefined ? 
            this.props.items.articles.map((item, idx) => {
              return (
                <div key={idx}>
                <br/>
                <Link to={`/home/${item.title}`} className="card-link">
                  <div className="card">
                  <h3 className="card-header">{ item.title }</h3>
                  <img className="Image-format" src={item.urlToImage} alt="Card image"/>
                  <div className="card-footer text-muted">
                    2 days ago
                  </div>
                  </div>
                </Link>
                </div>
              )
              }):
            <img src="../loading.gif" alt="Flowers in Chania"/>
            }
            
          </div>
        )
    }

  componentWillMount() {
    this.props.fetchNews()
    console.log(this.props)
    // console.log(this.state.items)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchNews: () => dispatch(fetchNews())
  }
}

const mapStateToProps = (state) => {
  // alert(JSON.stringify(state))
  console.log(state, 'asdjanslkdjasnd')
  return {
      items: state.items
  }
}

var ConnectedComponent = connect(
  mapStateToProps, mapDispatchToProps
)(Home)

export default ConnectedComponent