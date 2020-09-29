import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../assets/swigert_designs_logo_white.png';

function HomePage() {
    return (
        <div className="App">
            <div className="navPane full-bg">
                <Link to='/'><img id='logo' src={logo} alt='Swigert Designs logo in white' /></Link>
                <header>
                    <h1 className="titleText">Home Page</h1>
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
                {/* TODO: Need some sort of image here, possibly some sort of Design icon */}
                <p>Swigert Designs is the personal brand of Abigail Swigert, a professional Freelance Designer specializing in print, digital, and web design.
                     In her 10 years of Graphic Design experience and 5 years of Web Design experience, Abigail has worked for a number of clients across multiple
                     industries to bring them the perfect design solution for their business.
                </p>
            </div>
        </div>
    );
}

export default HomePage;