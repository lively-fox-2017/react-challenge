import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

import { 
  fetchNews,
  getDetail
} from '../actions/index'

class Details extends Component {
    constructor(props) {
        super()
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div>
            {this.props.details != undefined ?
              this.props.details.map((item) => {
                return (
                  <div>
                  <h1>
                  {item.title}
                  </h1>
                  <img src={item.urlToImage} width="100%" alt=""/>
                  </div>
                )
                }):
                'loading'
              }
          </div>
        )
    }

  componentDidMount() {
    console.log('mounted')
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getDetail: (params) => dispatch(getDetail(params))
  }
}

const mapStateToProps = (state) => {
  // alert(JSON.stringify(state))
  console.log(state, 'ini di detail')
  return {
      details: state.details
  }
}

var ConnectedComponent = connect(
  mapStateToProps, mapDispatchToProps
)(Details)

export default ConnectedComponent