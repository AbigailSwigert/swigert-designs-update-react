import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact render={(props) => <HomePage {...props} />} />
        <Route path='/aboutme' render={(props) => <AboutMe {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
