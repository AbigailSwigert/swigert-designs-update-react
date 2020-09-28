import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="App">
            <div class="navPane" id="indexNav">
    
            <header>
                <p class="titleText">Swigert Designs
                    <br />
                    <span class="subTitle">Home Page</span>
                </p>
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

export default HomePage;