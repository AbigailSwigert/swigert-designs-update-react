import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import WholeHerbsInsta from './Components/WholeHerbsInsta';
import Puffco from './Components/Puffco';
import WazShop from './Components/WazShop';
import WholeHerbsMag from './Components/WholeHerbsMag';
import Opms from './Components/Opms';
import YollyDolly from './Components/YollyDolly';

export default(
    <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wholeherbsinsta' element={<WholeHerbsInsta />} />
        <Route path='/puffco' element={<Puffco />} />
        <Route path='/wazshop' element={<WazShop />} />
        <Route path='/wholeherbsmag' element={<WholeHerbsMag />} />
        <Route path='/opms' element={<Opms />} />
        <Route path='/yolly_dolly' element={<YollyDolly />} />
    </Routes>
);