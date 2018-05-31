import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'

import Home from './pages/home/home.jsx'
import Me from './pages/me/me.jsx'


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/me" component={Me}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}
