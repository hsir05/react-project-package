import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'

import Homepage from './pages/homepage/homepage.jsx'


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" component={Homepage}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}
