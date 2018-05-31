import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'

import home from './pages/home/home.jsx'
import me from './pages/me/me.jsx'


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={home}/>
              <Route exact path="/me" component={me}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}
