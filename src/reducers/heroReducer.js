const initialState = {
  heroes: []
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HEROES':
      return {...state, heroes: action.payload.heroes};
    default:
      return state;
  };
}

export default heroReducer;
