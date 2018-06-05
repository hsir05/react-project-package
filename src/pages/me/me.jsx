import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, WhiteSpace,WingBlank } from 'antd-mobile'
import ReactPlaceholder from 'react-placeholder'
// import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

import 'react-placeholder/lib/reactPlaceholder.css'

import './me.scss'

// const awesomePlaceholder = (
//   <div className='my-awesome-placeholder'>
//     {/* <RectShape color='skyblue' style={{width: 30, height: 40}}/>
//     <TextBlock rows={3} color='orange'/>
//     <MediaBlock rows={3} color='green'/>
//     <TextRow rows={3}color='skyblue'/> */}
//     <RoundShape color='#e5e5e5' style={{width: 30, height: 30}}/>
//   </div>
// );


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
  componentDidMount () {
    console.log(this.props);
  }

  componentDidUpdate () {
    console.log('=====');
    console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    console.log('----');
    console.log(nextProps);
  }

  changeVal () {
    console.log(33);
    this.props.getData('虽然localforage的API名称和localStorage一样')
    console.log(this.props);
  }

  render() {
    let chil = (
      <WingBlank>
          <Link to="/"><div className='item'>home</div></Link>
          <Button type="warning" onClick={this.changeVal.bind(this)} >warning</Button><WhiteSpace />
      </WingBlank>
    )
    return (
      <div className='me'>
        {/* <ReactPlaceholder children={chil} ready={this.state.ready} customPlaceholder={awesomePlaceholder}> */}
        <ReactPlaceholder type='media' children={chil} rows={3} ready={this.state.ready}>
          {/* <Button type="warning">warning disabled</Button><WhiteSpace /> */}
        </ReactPlaceholder>
      </div>
    )
  }
}

Me.propTypes = {
  content: PropTypes.string
}
