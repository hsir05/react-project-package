import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, WhiteSpace,WingBlank } from 'antd-mobile';
import ReactPlaceholder from 'react-placeholder'
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

import './me.scss'

const awesomePlaceholder = (
  <div className='my-awesome-placeholder'>
    <RectShape color='skyblue' style={{width: 30, height: 40}}/>
    <TextBlock rows={3} color='orange'/>
    <MediaBlock rows={3} color='green'/>
    <TextRow rows={3}color='skyblue'/>
    <RoundShape color='red' style={{width: 30, height: 30}}/>
  </div>
);

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
        <ReactPlaceholder children={chil} ready={this.state.ready} customPlaceholder={awesomePlaceholder}>
        {/* <ReactPlaceholder type='media' children={chil} rows={2} ready={this.state.ready}> */}
          <Button type="warning">warning disabled</Button><WhiteSpace />
        </ReactPlaceholder>
      </div>
    )
  }
}
