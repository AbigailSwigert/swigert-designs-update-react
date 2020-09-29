import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../assets/swigert_designs_logo_white.png';

function HomePage() {
    return (
        <div className="App">
            <div className="navPane" id="indexNav">
    
            <header>
                <h1 className="titleText">Swigert Designs
                    <br />
                    <span className="subTitle">Home Page</span>
                </h1>
                <nav>
                    <ul>
                        <li><Link to='/aboutme'>About Me</Link></li>
                        <li><Link to='/resume'>Resume</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
            </div>
            <div id='company-description'>
                <img id='homepage-logo' src={logo} alt='Swigert Designs logo in white' />
                <p>Swigert Designs is a design company run by Abigail Swigert, specializing in print, digital, and web design.</p>
            </div>
           </div>
    );
}

export default HomePage;