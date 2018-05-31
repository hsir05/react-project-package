import React, { Component } from 'react'
import { Button, WhiteSpace,WingBlank } from 'antd-mobile';
import './me.scss'

export default class Me extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={{width:'70%',textCenter:'center',margin:'50px auto'}}>
        <WingBlank>
           <Button type="warning">warning</Button><WhiteSpace />
           <Button type="warning">warning disabled</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}
