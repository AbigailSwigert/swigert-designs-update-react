import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ProjectGrid from './Components/ProjectGrid';

function App() {

  return (
    <Router>
      <Nav />
      <Header />
      <ProjectGrid />
    </Router>
  );
}

export default App;
