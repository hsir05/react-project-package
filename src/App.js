import React from 'react'
// import { BrowserRouter as Router,HashRouter, Switch, Route } from 'react-router-dom'
import {HashRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store.js'

import Home from './pages/home/home.jsx'
import Me from './pages/me/me.jsx'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {mod: null}
  }

  render() {
    return (
        <Provider store={store}>
          {/* <Router> */}
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/me" component={Me}/>
            </Switch>
          </HashRouter>
          {/* </Router> */}
        </Provider>
    )
  }
}
