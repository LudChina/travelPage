import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    
    
    <Router> 
    <NavBar  />
      <Routes>
      <Route  path='/'/> 
      </Routes>
    </Router>  
    </>
  );
}

export default App;
