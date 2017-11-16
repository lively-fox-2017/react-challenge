import axios from 'axios';

const generateQuote = (payload) => {
  return (dispatch) => {
    return axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1', {headers: {"X-Mashape-Key": "7VaCOmrLEGmshuGxFXwic6fjZg7op16wRA8jsn1DCWfvv0ZDX4", "Accept": "application/json"}})
    .then(response => {
      const quote = response.data.quote;
      const source = response.data.author;
      dispatch(updateQuote({quote, source}))
    })
  }
}

const updateQuote = (payload) => {
  return {
    type: 'UPDATE_QUOTE',
    state: {
      quote: payload.quote,
      source: payload.source,
    },
  };
}

export default {
  generateQuote,
  updateQuote,
};
