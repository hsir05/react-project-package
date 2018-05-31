import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, WhiteSpace,WingBlank } from 'antd-mobile';
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css';

import './me.scss'


export default class Me extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready:false
    }
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({ready:true})
    },3000)
  }
  render() {
    let chil = (
      <WingBlank>
          <Link to="/"><div className='item'>home</div></Link>
          <Button type="warning">warning disabled</Button><WhiteSpace />
      </WingBlank>
    )
    return (
      <div className='me'>
        <ReactPlaceholder type='media' children={chil} rows={3} ready={this.state.ready}>

        </ReactPlaceholder>

      </div>
    )
  }
}
