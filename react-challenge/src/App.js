import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Pages/home'
import Details from './Pages/details'
import NavBar from './Pages/navbar'
import store from './Store/store'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome to React News'
    }
  }



  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
          <div>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/home/:id" component={Details} items={store}/>
          </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }

}



export default App;