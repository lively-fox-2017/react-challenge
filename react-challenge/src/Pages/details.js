import React, { Component } from 'react'
import { connect } from 'react-redux'

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
            {this.props.details !== undefined ?
              this.props.details.map((item, idx) => {
                return (
                  <div key={idx} className="col-md-8" style={{margin: 'auto'}}>
                  <h3>
                  { item.title }
                  <small className="text-muted"> written by : { item.author }</small>
                  </h3>
                  <img className="Round-image" src={item.urlToImage} width="100%" alt=""/>
                  <br/>
                  <br/>
                  <p className="lead">{ item.description }</p>
                  <a className="btn btn-outline-info" href={ item.url } target="_blank">Original Url</a>
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