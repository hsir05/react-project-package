import React from 'react'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store.js'

import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const Home = Loadable({
  loader: () => import('./pages/home/home.jsx'),
  loading: Loading,
  delay: 300,
})
const Me = Loadable({
  loader: () => import('./pages/me/index.js'),
  loading: Loading,
  delay: 300,
})

const App = () => (
   <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/me" component={Me}/>
      </Switch>
    </Router>
  </Provider>
)
export default App
