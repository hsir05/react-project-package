import React, { Component } from 'react'
import './me.scss'

export default class Me extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div >
        通过上面的配置，这个应用知道如何渲染下面四个 URL：
      </div>
    )
  }
}
