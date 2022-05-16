
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

const App=()=>{
  
let l=['business','entertainment','general','health','science','sports','technology']
 
    return (
      <div>
      <Router>
        <Navbar/>
        <Routes>
        
        {l.map((e,k)=>{
          return <Route key={k} exact path={`/${e}`}  element={<News key={e} category={e}/>}/>
        })}
        <Route exact path={`/`}  element={<News key='general' category={'general'}/>}/>
        </Routes>


      </Router>
      </div>
    )
  
}

export default App;
