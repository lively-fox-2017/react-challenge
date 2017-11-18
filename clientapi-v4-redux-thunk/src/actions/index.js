import * as actionTypes from './actionsType';
import Axios from 'axios';

const apiUrl = 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=080e457774e54e00b8fd9315ed37c24d';

export const getNewsSuccess = (news) => {
  return {
    type: actionTypes.GET_NEWS_SUCCESS,
    news
  }
};

export const getNewsOneSuccess = (newsone) => {
  return {
    type: actionTypes.GET_NEWS_ONE_SUCCESS,
    newsone
  }
};

export const getNews = () => {

  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(getNewsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getNewsOne = (nilai) => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(getNewsOneSuccess(response.data.articles[nilai]))
      })
      .catch(error => {
        throw(error);
      });
  };
};
