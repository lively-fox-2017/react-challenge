const defaultState = { recipees: [] };

const RecipeeReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'SET_RECIPEES':
      return {...state, recipees: action.payload.recipees}
    default:
      return state;
  }
};

export default RecipeeReducer;