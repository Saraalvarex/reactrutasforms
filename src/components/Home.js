import React, { Component } from 'react'
import imgHome from './assets/images/img1.jfif'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      <img src={imgHome} style={{width:'500px'}}/>
      </div>
    )
  }
}
