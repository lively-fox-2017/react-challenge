import React, { Component } from 'react'
import AppReactRedux from './AppReactRedux'
import { Provider } from 'react-redux'

import { store } from '../store'

class AppWrapper extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppReactRedux />
      </Provider>
    );
  }

}

export default AppWrapper
