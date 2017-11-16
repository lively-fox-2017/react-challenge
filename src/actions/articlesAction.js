import axios from 'axios'

export const articlesAction = (news) => {
  return {
    type: "ARTICLES",
    payload: news
  }
}

export const articleAction = (article) => {
  return {
    type: "ARTICLE",
    payload: article
  }
}

export const articlesAxios = () => {
  return (dispatch, getState)=> {
    axios.get('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=496adc0095e04b3e9aca4c0ad74e1e63')
    .then(({data}) => {
      // console.log(data.articles);
      // console.log("Masuk Nih");

      return dispatch(articlesAction(data.articles))
    }).catch((reason) => {
      console.log("ERROR ", reason);
    })
  }
}
