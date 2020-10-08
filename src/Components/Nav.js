import React from 'react';
import '../App.css';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/swigert_designs_logo_white.png';
import {updateTitle} from '../App';

function Nav() {
    const location = useLocation();
    const currentPath = location.pathname;

    function checkRefresh() {
        const title = document.getElementById('titleText');
        const subtitle = document.getElementById('subtitleText');
        const fullNavbar = document.getElementById('full-navbar');
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
                case '/wholeherbsinsta':
                case '/wholeherbsmag':
                    title.innerHTML = "Portfolio";
                    subtitle.innerHTML = "Whole Herbs";
                    break;
                case '/puffco':
                    title.innerHTML = "Portfolio";
                    subtitle.innerHTML = "Puffco Peak";
                    break;
                case '/wazshop':
                    title.innerHTML = "Portfolio";
                    subtitle.innerHTML = "Waz Shop";
                    break;
                case '/opms':
                    title.innerHTML = "Portfolio";
                    subtitle.innerHTML = "OPMS Kratom";
                    break;
                case '/yolly_dolly':
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
    }

    return (
        <div id="navPane" onLoad={checkRefresh} value="">

            <img id='logo' src={logo} alt='Swigert Designs logo in white' />

            <header id="full-navbar">

                <h1 id="titleText"></h1> 
                <h2 id="subtitleText"></h2>

                <nav>

                    <ul id="navList">
                        <li><Link to='/' onClick={() => updateTitle("homepage")}>Home Page</Link></li>

                        <li><Link to='/resume' onClick={() => updateTitle("resume")}>Resume</Link></li>

                        <li><Link to='/portfolio' onClick={() => updateTitle("portfolio")}>Portfolio</Link></li>
                        
                        <li><Link to='/contact' onClick={() => updateTitle("contact")}>Contact</Link></li>
                    </ul>

                </nav>

            </header>

        </div>
    );
}


export default Nav;