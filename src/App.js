import React from 'react';
import './App.css';
import {HashRouter as Router} from 'react-router-dom';
import routes from './routes';
import Nav from './Components/Nav';

function App() {
// TODO: make all pages responsive
  return (
    <Router>
        <Nav />
        {routes}
    </Router>
  );
}

export function updateTitle(newTitle) {
    const title = document.getElementById('titleText');
    const subtitle = document.getElementById('subtitleText');
    const fullNavbar = document.getElementById('full-navbar');
    switch(newTitle) {
        case 'homepage':
            title.innerHTML = "Home Page";
            subtitle.innerHTML = "Abigail Swigert's Bio";
            break;
        case 'resume':
            title.innerHTML = 'Resume';
            subtitle.innerHTML = "Abigail's Qualifications";
            break;
        case 'portfolio':
            title.innerHTML = 'Portfolio';
            subtitle.innerHTML = "Abigail's Past Work";
            break;
        case 'contact':
            title.innerHTML = 'Contact';
            subtitle.innerHTML = "Email Abigail";
            break;
        case 'wholeherbsinsta':
        case 'wholeherbsmag':
            title.innerHTML = "Portfolio";
            subtitle.innerHTML = "Whole Herbs";
            break;
        case 'puffco':
            title.innerHTML = "Portfolio";
            subtitle.innerHTML = "Puffco Peak";
            break;
        case 'wazshop':
            title.innerHTML = "Portfolio";
            subtitle.innerHTML = "Waz Shop";
            break;
        case 'opms':
            title.innerHTML = "Portfolio";
            subtitle.innerHTML = "OPMS Kratom";
            break;
        case 'yollydolly':
            title.innerHTML = "Portfolio";
            subtitle.innerHTML = "Yolly_Dolly";
            break;
        default:
            title.innerHTML = 'Swigert Designs';
            subtitle.innerHTML = "Abigail Swigert";
            break;
    }
    fullNavbar.classList.add('animate');
    setTimeout(() => {fullNavbar.classList.remove('animate');}, 2000);
}

export default App;
