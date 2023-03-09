import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';

function App() {

  return (
    <Router>
      <Nav />
      <Header />
    </Router>
  );
}

export default App;
