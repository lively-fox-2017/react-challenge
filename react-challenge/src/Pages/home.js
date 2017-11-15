import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import axios from 'axios';

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
            <div>
            {this.props.title}
            {this.props.items.articles != undefined ? 
            this.props.items.articles.map((item) => {
              return (
                <div>
                <Link to={`/home/${item.title}`}>
                <h1>
                {item.title}
                </h1>
                </Link>
                <img src={item.urlToImage} width="100%" alt=""/>
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