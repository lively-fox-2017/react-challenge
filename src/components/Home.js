import React from 'react'
import { connect } from 'react-redux'
import nasaAPP from '../reducers/nasa'
import { newsFormAPI } from '../actions/nasa'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.getNews()
  }
  render () {
    return (
      <div className="home">
        { 
          this.props.showNews.map(val => {
            if(val.news) {
              return (
                <div className="home-dateil">
                  <h3>{val.news.title}</h3>
                  <img src={val.news.url} width="50%" alt={val.news.url}/>
                  <p>{val.news.explanation}</p>
                  <i>{val.news.copyright}, {val.news.date}</i>
                </div>
              )
            }
          })
        }          
      </div>
    )
  }
}
const mapState = (state) => (
  { showNews: state.nasaAPI }  
)
const mapDispatch = (dispatch) => (
  { getNews: () => dispatch(newsFormAPI()) }
)
const homeConnect = connect(
  mapState,
  mapDispatch
)(Home)
export default homeConnect