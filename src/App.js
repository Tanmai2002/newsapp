import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  
l=['business','entertainment','general','health','science','sports','technology']
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <Routes>
        
        {this.l.map((e)=>{
          return <Route exact path={`/${e}`}  element={<News key={e} category={e}/>}/>
        })}
        <Route exact path={`/`}  element={<News key='general' category={'general'}/>}/>
        </Routes>


      </Router>
      </div>
    )
  }
}

