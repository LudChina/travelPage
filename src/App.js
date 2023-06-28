import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home'

function App() {
  return (
    <>
    
    
    <Router> 
    <NavBar  />
      <Routes>
      <Route  path='/' Component={Home}/> 
      </Routes>
    </Router>  
    </>
  );
}

export default App;
