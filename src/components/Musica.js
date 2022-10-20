import React, { Component } from 'react'
import imgMusica from './assets/images/img2.jpeg'

export default class Musica extends Component {
  render() {
    return (
      <div>
        <h1>Musica</h1>
      <img src={imgMusica} style={{width:'500px'}}/>
      </div>
    )
  }
}
