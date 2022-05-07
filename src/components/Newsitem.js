import React, { Component } from 'react'
import spiner from '../spinner4.gif'

export class Newsitem extends Component {
  render() {
      let {title, desc,img,newsurl}=this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={img} placeholder={spiner} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}...</p>
          <a href={newsurl} className="btn btn-small btn-primary" target="_blank">Read More..</a>
        </div>
      </div>
    )
  }
}

export default Newsitem