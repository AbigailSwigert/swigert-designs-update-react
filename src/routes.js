import React from 'react';
import {Switch,Route} from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import HomePage from './Components/HomePage';

export default(
    <Switch>
        <Route path='/' exact render={(props) => <HomePage {...props} />} />
        <Route path='/aboutme' render={(props) => <AboutMe {...props} />} />
    </Switch>
);