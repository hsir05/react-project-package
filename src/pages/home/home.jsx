import React from 'react'
import Loadable from 'react-loadable'
import { ActivityIndicator } from 'antd-mobile'

const Loading = () => <ActivityIndicator toast />
// const Loading = () => <div>Loading...</div>

const LoadableComponent = Loadable({
  loader: () => import('./hoemItem'),
  loading: Loading,
})

export default class Home extends React.Component {

  render() {
    return <LoadableComponent/>
  }
}
