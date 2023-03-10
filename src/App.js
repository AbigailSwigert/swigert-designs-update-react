import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ProjectGrid from './Components/ProjectGrid';
import ContactMenu from './Components/ContactMenu';
import OPMSCampaign from './Components/OPMSCampaign';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={
          <>
            <Header />
            <ProjectGrid />
          </>
        }/>
        <Route path='opms-ad-campaign' element={<OPMSCampaign />} />
      </Routes>
      <ContactMenu />
    </Router>
  );
}

export default App;
