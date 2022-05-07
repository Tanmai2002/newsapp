
import React, { Component } from 'react'
import spinner from '../spinner4.gif'

export default class Spinner extends Component {
  render() {
    return (

      <div className='text_center'>
          
          <img src={spinner}/>
      </div>
    )
  }
}
