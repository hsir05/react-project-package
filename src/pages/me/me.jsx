import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {method as dbTool} from '../db/db'
import { Button, WhiteSpace,WingBlank } from 'antd-mobile'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
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
    this.mounted = true
  }
  componentDidMount () {
    let params = {name:'风一样的人',keyword:this.props.content}
    dbTool.add(params)
  }

  componentDidUpdate () {
    console.log('=====');
    console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    console.log('----');
    console.log(nextProps);
  }

  componentWillUnmount () {
    this.mounted = false
  }

  changeVal () {
    this.props.getData('花一样的人')
    let params = {name:'风一样的人',keyword:this.props.content}
    dbTool.add(params)
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
        <ReactPlaceholder type='media' children={chil} rows={3} ready={this.state.ready}>
        </ReactPlaceholder>
      </div>
    )
  }
}

Me.propTypes = {
  content:PropTypes.string.isRequired
}
