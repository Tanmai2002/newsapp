import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title, desc,img}=this.props;
    return (
        <div class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{desc}</p>
          <a href="/" class="btn btn-small btn-primary">Read More..</a>
        </div>
      </div>
    )
  }
}

export default Newsitem