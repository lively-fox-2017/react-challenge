import React, { Component } from 'react'
import Axios from 'axios'
import ListVideo from './ListVideo'
import { connect } from 'react-redux'
import { fetchAllVideo } from '../actions/listVideoActions'

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
      this.setState({listVideo:response.data.items})
      console.log('adfasds', response.data.items);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  componentDidMount(){
    Axios.get('https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyD36XAU2xCZCinLW7GnkoLSgmelqNV4_Dg&part=snippet&maxResults=8')
    .then(response=>{
      // console.log(response);
      // this.setState({listVideo:response.data.items})
      this.props.fetchAllVideo(response)
      // console.log('adfasds', response.data.items); response.data.items[0].snippet.thumbnails.medium);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  handleChange(event){
    this.setState({param:event.target.value});
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
                        <button onClick={()=>this.searchVideo(this.state.param)} type="button" className="btn btn-default">Search</button>
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
  return {
    listVideo: state.listVideoReducer.listVideo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllVideo: (listVideo) => dispatch(fetchAllVideo(listVideo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
