import React from 'react';
import {Switch,Route} from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import HomePage from './Components/HomePage';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

export default(
    <Switch>
        <Route path='/' exact render={(props) => <HomePage {...props} />} />
        <Route path='/aboutme' render={(props) => <AboutMe {...props} />} />
        <Route path='/resume' render={(props) => <Resume {...props} />} />
        <Route path='/portfolio' render={(props) => <Portfolio {...props} />} />
        <Route path='/contact' render={(props) => <Contact {...props} />} />
    </Switch>
);