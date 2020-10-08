import React from 'react';
import '../App.css';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/swigert_designs_logo_white.png';

function Nav() {
    const location = useLocation();
    const currentPath = location.pathname;

    function checkRefresh() {
        var title = document.getElementById('titleText');
        const fullNavbar = document.getElementById('full-navbar');
        const subtitle = document.getElementById('subtitleText');
        if(document.getElementById('navPane').value === "") {
            document.getElementById('navPane').value = "1";
        } else {
            switch(currentPath) {
                case '/':
                    title.innerHTML = 'Home Page';
                    subtitle.innerHTML = "Abigail Swigert's Bio";
                    break;
                case '/resume':
                    title.innerHTML = 'Resume';
                    subtitle.innerHTML = "Abigail's Qualifications";
                    break;
                case '/portfolio':
                    title.innerHTML = 'Portfolio';
                    subtitle.innerHTML = "Abigail's Past Work";
                    break;
                case '/contact':
                    title.innerHTML = 'Contact';
                    subtitle.innerHTML = "Email Abigail";
                    break;
                default:
                    title.innerHTML = 'Swigert Designs';
                    subtitle.innerHTML = "Abigail Swigert";
                    break;
            }
            fullNavbar.classList.add('animate');
            setTimeout(() => {fullNavbar.classList.remove('animate');}, 2000);
        }
    }

    function updateSubtitle() {
        const subtitle = document.getElementById('subtitleText');
        const title = document.getElementById('titleText').innerHTML;
        switch(title) {
            case "Home Page":
                subtitle.innerHTML = "Abigail Swigert's Bio";
                break;
            case "Resume":
                subtitle.innerHTML = "Abigail's Qualifications";
                break;
            case "Portfolio":
                subtitle.innerHTML = "Abigail's Past Work";
                break;
            case "Contact":
                subtitle.innerHTML = "Email Abigail";
                break;
            default:
                subtitle.innerHTML = "Abigail Swigert";
                break;
        }
    }

    function updateTitle(e) {
        var target = e.target || e.srcElement;
        const title = document.getElementById('titleText');
        const fullNavbar = document.getElementById('full-navbar');
        title.innerHTML = target.innerHTML;
        updateSubtitle();
        fullNavbar.classList.add('animate');
        setTimeout(() => {fullNavbar.classList.remove('animate');}, 2000);
    }

    return (
        <div id="navPane" onLoad={checkRefresh} value="">

            <img id='logo' src={logo} alt='Swigert Designs logo in white' />

            <header id="full-navbar">

                <h1 id="titleText"> </h1> 
                <h2 id="subtitleText"></h2>

                <nav>

                    <ul id="navList">
                        <li><Link to='/' onClick={updateTitle}>Home Page</Link></li>

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