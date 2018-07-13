import React, { Component } from 'react'
import ListVideo from './ListVideo'
import { connect } from 'react-redux'
import { paramChange, fetchAllVideoAPI, fetchAllVideoByParamAPI } from '../actions/listVideoActions'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listVideo:[],
      param:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  searchVideo(param){
    console.log('inii param', param);
    this.props.fetchAllVideoByParam(param)
  }
  componentDidMount(){
    this.props.fetchAllVideo()
  }
  handleChange(event){
    // console.log('iniprops', this.props);
    this.props.paramChange(event.target.value);
    console.log('ini props param', this.props.param);
    event.preventDefault();
  }
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            {/* <h1>Lets Play your video</h1> */}
            <div className="input-group">
                    <input onChange={this.handleChange} type="text" className="form-control" placeholder="Search&hellip;"/>
                    <span className="input-group-btn">
                        <button onClick={()=>this.searchVideo(this.props.param)} type="button" className="btn btn-default">Search</button>
                    </span>
                </div>
          </div>
          <div className="col-md-2">
          </div>
        </div>
        <div>
          <ListVideo listVideo={this.props.listVideo}></ListVideo>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log('--------mapStateToProps', state);
  return {
    listVideo: state.listVideoReducer.listVideo,
    param: state.listVideoReducer.param
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log('...........dispatch', dispatch);
  return {
    fetchAllVideo: () => dispatch(fetchAllVideoAPI()),
    fetchAllVideoByParam: (param) => dispatch(fetchAllVideoByParamAPI(param)),
    paramChange: (param) => dispatch(paramChange(param))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
