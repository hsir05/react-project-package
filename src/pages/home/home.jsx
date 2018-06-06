import React from 'react'

import Loadable from 'react-loadable'
// import Loading from './my-loading-component'
import { ActivityIndicator } from 'antd-mobile'

const LoadableComponent = Loadable({
  loader: () => import('./hoemItem'),
  loading: ActivityIndicator,
})

export default class Home extends React.Component {
  state = {
      animating: true,
  }

  render() {
    return <LoadableComponent/>
  }
}
