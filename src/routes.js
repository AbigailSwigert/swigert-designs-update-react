import React from "react";
import { Route, Routes } from "react-router-dom";
import CampaignGrid from "./Components/HomePage/CampaignGrid";
import Header from "./Components/HomePage/Header";
import BoldIdeaCampaign from "./Components/Projects/BoldIdeaCampaign";
import EmailCampaign from "./Components/Projects/EmailCampaign";
import NicPackCampaign from "./Components/Projects/NicPackCampaign";
import OPMSCampaign from "./Components/Projects/OPMSCampaign";

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
        <Route path='/email-campaign' element={<EmailCampaign />} />
        <Route path='/nicpack-campaign' element={<NicPackCampaign />} />
      </Routes>
)