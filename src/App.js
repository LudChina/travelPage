import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <NavBar />
    </Router>  
    </>
  );
}

export default App;
