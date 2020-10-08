import React from 'react';
import {Switch,Route} from 'react-router-dom';
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
    <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/resume' component={Resume} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/wholeherbsinsta' component={WholeHerbsInsta} />
        <Route path='/puffco' component={Puffco} />
        <Route path='/wazshop' component={WazShop} />
        <Route path='/wholeherbsmag' component={WholeHerbsMag} />
        <Route path='/opms' component={Opms} />
        <Route path='/yolly_dolly' component={YollyDolly} />
    </Switch>
);