import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import '../Portfolio.css';
import {updateTitle} from '../App';

function Portfolio(props) {
    return (
        <div className="content-area">
            <div id="portfolio">

                <Link to='wholeherbsinsta' className="img-container" onClick={() => updateTitle("wholeherbsinsta")}>

                    <img className="portfolio-img" src={require('../portfolio_photos/3D Marble Rendering.jpg')} alt="3D rendering of Whole Herbs bagged powder products on marble platforms" />

                </Link>

                <Link to='puffco' className="img-container" onClick={() => updateTitle("puffco")}>
                    {/* Switched from GIF to video for better site performance */}
                    
                    {/* <img className="portfolio-img" src={require('../portfolio_photos/Puff-Co-Peak-Lightning-Full.gif')} alt="GIF of PuffCo Peak Lightning Dab Rig floating in front of lime green background and white smoke" /> */}

                    <video className="portfolio-img" autoPlay loop muted playsInline alt="GIF of PuffCo Peak Lightning Dab Rig floating in front of lime green background and white smoke">
                        <source src={require('../portfolio_photos/Puff-Co-Peak-Lightning-Full.webm')} />
                        <source src={require('../portfolio_photos/Puff-Co-Peak-Lightning-Full.mp4')} />
                    </video>
                    
                </Link>

                <Link to='wazshop' className="img-container" onClick={() => updateTitle("wazshop")}>
                    {/* Switched from GIF to video for better site performance */}
                    
                    {/* <img className="portfolio-img" src={require('../portfolio_photos/Waz-Shop.gif')} alt="GIF of Waz Shop logo with a shifting blurred version of the logo behind it, in front of a black and red background" /> */}

                    <video className="portfolio-img" autoPlay loop muted playsInline alt="GIF of Waz Shop logo with a shifting blurred version of the logo behind it, in front of a black and red background">
                        <source src={require('../portfolio_photos/Waz-Shop.webm')} />
                        <source src={require('../portfolio_photos/Waz-Shop.mp4')} />
                    </video>
                    
                </Link>

                <Link to='wholeherbsmag' className="img-container" onClick={() => updateTitle("wholeherbsmag")}>
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Whole Herbs Exploded Bottle 1 Page.jpg')} alt="Whole Herbs bottle with Kratom capsules exploding out of the top, and blocks of text pointing to individual pills" />
                    
                </Link>

                <Link to='opms' className="img-container" onClick={() => updateTitle("opms")}>
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/OPMS Gold Purple n Pink 2 Page.jpg')} alt="2 page magazine ad, purple and pink background with OPMS Gold products floating on left side and text on the right side" />
                    
                </Link>

                <Link to='yolly_dolly' className="img-container" onClick={() => updateTitle("yollydolly")}>
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Yolly_Dolly Offline Banner.jpg')} alt="Yolly_Dolly logo of waving toy doll in front of a purple and blue space background, text underneath reading 'Offline, check back again soon!'" />
                    
                </Link>

            </div>
        </div>
    );
}

export default Portfolio;