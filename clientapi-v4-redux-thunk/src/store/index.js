import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store

// export default function configureStore(initialState) {
//   const middewares = [
//     // Add other middleware on this line...
//
//     // thunk middleware can also accept an extra argument to be passed to each thunk action
//     // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
//     thunkMiddleware,
//   ];
//
//   return createStore(rootReducer, initialState, compose(
//     applyMiddleware(...middewares)
//     )
//   );
// }
