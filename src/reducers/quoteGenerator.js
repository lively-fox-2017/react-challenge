import quoteGenerator from '../actions/quoteGenerator';

const defaultState = {
  quote: '',
  source: '',
};

function quoteGeneratorReducer(state=defaultState, action) {
  switch (action.type) {
    case 'UPDATE_QUOTE':
      return action.state
  }
  return state
}

export default quoteGeneratorReducer;
