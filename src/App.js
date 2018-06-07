import React from 'react'
// import { BrowserRouter as Router,HashRouter, Switch, Route } from 'react-router-dom'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store.js'

import Loadable from 'react-loadable'

import Home from './pages/home/home.jsx'
// import Me from './pages/me/index.js'
// const Home = Loadable({
//   loader: () => import('./pages/home/home.jsx')
//  // loading: Loading,
// })
const Loading = () => <div>Loading...</div>
const Me = Loadable({
  loader: () => import('./pages/me/index.js'),
  loading: Loading,
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
);
export default App
// export default class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {mod: null}
//   }
//
//   render() {
//     console.log(Me);
//     return (
//         <Provider store={store}>
//           {/* <Router> */}
//           <HashRouter>
//             <Switch>
//               <Route exact path="/" component={Home}/>
//               <Route  path="/me" component={Me}/>
//             </Switch>
//           </HashRouter>
//           {/* </Router> */}
//         </Provider>
//     )
//   }
// }
