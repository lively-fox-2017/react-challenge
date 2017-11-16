import axios from 'axios'

export const fetchAllVideo = (listVideo) => {
  return {
    type: 'fetchAll',
    payload: {
      listVideo
    }
  }
}

export const paramChange = (param) => {
  // console.log('xxxxxx', param);
  return {
    type: 'param_change',
    payload: {
      param
    }
  }
}

export const fetchAllVideoAPI = () => {
  return (dispatch, getState) => {
    axios.get('https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyD36XAU2xCZCinLW7GnkoLSgmelqNV4_Dg&part=snippet&maxResults=8')
    .then(response => {
      dispatch(fetchAllVideo(response.data.items))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const fetchAllVideoByParamAPI = (param) => {
  return (dispatch, getState) => {
    axios.get ('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+param+'&type=video&key=AIzaSyD36XAU2xCZCinLW7GnkoLSgmelqNV4_Dg&maxResults=8')
    .then(response => {
      dispatch(fetchAllVideo(response.data.items))
    })
    .catch(err => {
      console.log(err);
    })
  }
}
