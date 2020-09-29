import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../assets/swigert_designs_logo_white.png';

function Resume() {
    return (
        <div className='App'>
            <div className="navPane">
                <Link to='/'><img id='logo' src={logo} alt='Swigert Designs logo in white' /></Link>
                <header>
                    <h1 className="titleText">Resume</h1>
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

            
        </div>
    );
}

export default Resume;