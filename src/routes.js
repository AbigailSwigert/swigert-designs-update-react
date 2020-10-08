import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

export default(
    <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/resume' component={Resume} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
    </Switch>
);