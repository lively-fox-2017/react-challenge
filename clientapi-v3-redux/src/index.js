import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import store dari file index di folder store
import store from './store/index'
// import provider dari react-redux
import { Provider } from 'react-redux'


ReactDOM.render(
  // bungkus app dengan provider ===> store={store} ??
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root'));
registerServiceWorker();
