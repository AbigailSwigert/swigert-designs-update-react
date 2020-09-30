import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../assets/swigert_designs_logo_white.png';

function Nav() {
    return (
        <div id="navPane">
            <Link to='/'><img id='logo' src={logo} alt='Swigert Designs logo in white' /></Link>
            <header>
                {/* need to make this change with the page */}
                <h1 className="titleText">Page Name</h1> 
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
    );
}

export default Nav;