import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import ContactMenu from './Components/Contact/ContactMenu';
import routes from './routes';

function App() {

  return (
    <Router>
      <Nav />
      {routes}
      <ContactMenu />
    </Router>
  );
}

export default App;
