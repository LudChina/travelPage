import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home'
import Experiencias from './Components/pages/Experiencias';
import Destinos from './Components/pages/Destinos';
import Registro from './Components/pages/Registro';

function App() {
  return (
    <>
    
    
    <Router> 
    <NavBar  />
      <Routes>
      <Route  path='/' Component={Home}/> 
      <Route  path='/experiencias' Component={Experiencias}/>
      <Route  path='/destinos' Component={Destinos}/>
      <Route  path='/registro' Component={Registro}/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
