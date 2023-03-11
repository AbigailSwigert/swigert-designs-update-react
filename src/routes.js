import React from "react";
import { Route, Routes } from "react-router-dom";
import CampaignGrid from "./Components/HomePage/CampaignGrid";
import Header from "./Components/HomePage/Header";
import BoldIdeaCampaign from "./Components/Projects/BoldIdeaCampaign";
import PartynutsCampaign from "./Components/Projects/PartynutsCampaign";
import NicPackCampaign from "./Components/Projects/NicPackCampaign";
import OPMSCampaign from "./Components/Projects/OPMSCampaign";
import About from "./Components/About/About";

export default (
    <Routes>
        <Route path="/" exact element={
          <>
            <Header />
            <CampaignGrid />
          </>
        }/>
        <Route path='opms-ad-campaign' element={<OPMSCampaign />} />
        <Route path='/bold-idea-2023-campaign' element={<BoldIdeaCampaign />} />
        <Route path='/partynuts-campaign' element={<PartynutsCampaign />} />
        <Route path='/nicpack-campaign' element={<NicPackCampaign />} />
        <Route path='/about' element={<About />} />
      </Routes>
)