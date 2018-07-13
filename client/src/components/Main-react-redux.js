import React, { Component } from 'react'
import Axios from 'axios'
import ListVideo from './ListVideo'
import { connect } from 'react-redux'
import { fetchAllVideo, paramChange, fetchAllVideoAPI } from '../actions/listVideoActions'

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
    Axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+param+'&type=video&key=AIzaSyD36XAU2xCZCinLW7GnkoLSgmelqNV4_Dg&maxResults=8')
    // https://www.googleapis.com/youtube/v3/search
    .then(response=>{
      // console.log(response);
      // this.setState({listVideo:response.data.items})
      this.props.fetchAllVideo(response.data.items)
      // console.log('adfasds', response.data.items);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  componentDidMount(){
    this.fetchAllVideoAPI()
    // Axios.get('https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyD36XAU2xCZCinLW7GnkoLSgmelqNV4_Dg&part=snippet&maxResults=8')
    // .then(response=>{
    //   // console.log('ini props', this.props);
    //   this.props.fetchAllVideo(response.data.items)
    //   // console.log('------props.fetchAllVideo', this.props.fetchAllVideo);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })

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
    fetchAllVideoAPI: () => dispatch(fetchAllVideo(listVideo)),
    paramChange: (param) => dispatch(paramChange(param))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
