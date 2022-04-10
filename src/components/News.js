import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    api='563b86e1120b463c9b33bb1f8ee9c6ec';
  render() {
    return (
      <div className='container my-3'>
          <h1>Top Headlines</h1>
          <div className='row'>
                <div className="col-md-4 my-2">
                    <Newsitem title='Title' desc='My Description' img='https://www.gannett-cdn.com/presto/2022/03/28/USAT/ec6656d3-2dd0-4a28-9561-51bf3da38a44-USP_Entertainment__94th_Academy_Awards_-_Show_13.jpg?auto=webp&crop=6719,3780,x0,y341&format=pjpg&width=1200'/>
                </div>
                <div className="col-md-4 my-2">
                <Newsitem title='Title' desc='My Description' img='https://www.gannett-cdn.com/presto/2022/03/28/USAT/ec6656d3-2dd0-4a28-9561-51bf3da38a44-USP_Entertainment__94th_Academy_Awards_-_Show_13.jpg?auto=webp&crop=6719,3780,x0,y341&format=pjpg&width=1200'/>
                </div>
                <div className="col-md-4 my-2">
                <Newsitem title='Title' desc='My Description' img='https://www.gannett-cdn.com/presto/2022/03/28/USAT/ec6656d3-2dd0-4a28-9561-51bf3da38a44-USP_Entertainment__94th_Academy_Awards_-_Show_13.jpg?auto=webp&crop=6719,3780,x0,y341&format=pjpg&width=1200'/>
                </div>
                <div className="col-md-4 my-2">
                <Newsitem title='Title' desc='My Description' img='https://www.gannett-cdn.com/presto/2022/03/28/USAT/ec6656d3-2dd0-4a28-9561-51bf3da38a44-USP_Entertainment__94th_Academy_Awards_-_Show_13.jpg?auto=webp&crop=6719,3780,x0,y341&format=pjpg&width=1200'/>
                </div>
          </div>
      </div>
    )
  }
}

export default News