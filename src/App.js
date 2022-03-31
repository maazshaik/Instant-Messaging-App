import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginN from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import HomeN from './Pages/Home/home';

class App extends React.Component{ 

  render(){
    return ( 
      <div>
        <Routes> 
            <Route path = '/' element = {<LoginN />} />
            <Route path = '/userhome' element = {<HomeN />} />
            <Route path = '/userregister' element = {<Register />} />
        </Routes> 
      </div>
    )
  }
}
 
export default App;
