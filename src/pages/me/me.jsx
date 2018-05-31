import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, WhiteSpace,WingBlank } from 'antd-mobile';
import './me.scss'

export default class Me extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='me'>
        <WingBlank>
            <Link to="/"><div className='item'>home</div></Link>
           <Button type="warning">warning disabled</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}
