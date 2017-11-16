const initialState = {
  matches: [],
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MATCHES':
      return {...state, matches: action.payload.matches};
    default:
      return state;
  };
};

export default matchReducer;
