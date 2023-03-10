import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/HomePage/Header';
import Nav from './Components/Nav/Nav';
import ContactMenu from './Components/Contact/ContactMenu';
import OPMSCampaign from './Components/Projects/OPMSCampaign';
import BoldIdeaCampaign from './Components/Projects/BoldIdeaCampaign';
import CampaignGrid from './Components/HomePage/CampaignGrid';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={
          <>
            <Header />
            <CampaignGrid />
          </>
        }/>
        <Route path='opms-ad-campaign' element={<OPMSCampaign />} />
        <Route path='/bold-idea-2023-campaign' element={<BoldIdeaCampaign />} />
      </Routes>
      <ContactMenu />
    </Router>
  );
}

export default App;
