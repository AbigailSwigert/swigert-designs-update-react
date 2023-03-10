import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ProjectGrid from './Components/ProjectGrid';
import ContactMenu from './Components/ContactMenu';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/"
          exact
          element={
          <>
            <Header />
            <ProjectGrid />
          </>}
        />
      </Routes>
      <ContactMenu />
    </Router>
  );
}

export default App;
