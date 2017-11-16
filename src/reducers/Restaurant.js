const defaultState = { restaurants: [] };

const RestaurantReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return {...state, restaurants: action.payload.restaurants};
    default:
      return state;
  }
};

export default RestaurantReducer;