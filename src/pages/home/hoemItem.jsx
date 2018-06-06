import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './home.scss'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='home'>
        <Link to="/"><div className='item'>home</div></Link>
        <Link to="/me"><div className='item'>me</div></Link>
      </div>
    )
  }
}
