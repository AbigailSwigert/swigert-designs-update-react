import React from 'react';
import '../App.css';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/swigert_designs_logo_white.png';

function Nav() {
    const location = useLocation();
    const currentPath = location.pathname;

    function checkRefresh() {
        var target = document.getElementById('titleText');
        const fullNavbar = document.getElementById('full-navbar');
        if(document.getElementById('navPane').value === "") {
            document.getElementById('navPane').value = "1";
        } else {
            switch(currentPath) {
                case '/':
                    target.innerHTML = 'Home Page';
                    break;
                case '/aboutme':
                    target.innerHTML = 'About Me';
                    break;
                case '/resume':
                    target.innerHTML = 'Resume';
                    break;
                case '/portfolio':
                    target.innerHTML = 'Portfolio';
                    break;
                case '/contact':
                    target.innerHTML = 'Contact';
                    break;
                default:
                    target.innerHTML = 'Swigert Designs';
                    break;
            }
            fullNavbar.classList.add('animate');
            setTimeout(() => {fullNavbar.classList.remove('animate');}, 2000);
        }
    }

    function updateTitle(e) {
        var target = e.target || e.srcElement;
        const title = document.getElementById('titleText');
        const fullNavbar = document.getElementById('full-navbar');
        if (target.innerHTML !== "") {
            title.innerHTML = target.innerHTML;
        } else {
            title.innerHTML = 'Home Page';
        }
        fullNavbar.classList.add('animate');
        setTimeout(() => {fullNavbar.classList.remove('animate');}, 2000);
    }

    return (
        <div id="navPane" onLoad={checkRefresh} value="">
            <Link to='/' onClick={updateTitle}><img id='logo' src={logo} alt='Swigert Designs logo in white' /></Link>
            <header id="full-navbar">
                <h1 id="titleText"> </h1> 
                <nav>
                    <ul id="navList">
                        <li><Link to='/aboutme' onClick={updateTitle}>About Me</Link></li>
                        <li><Link to='/resume' onClick={updateTitle}>Resume</Link></li>
                        <li><Link to='/portfolio' onClick={updateTitle}>Portfolio</Link></li>
                        <li><Link to='/contact' onClick={updateTitle}>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}


export default Nav;