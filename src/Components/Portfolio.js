import React from 'react';
import '../App.css';
import '../Portfolio.css';

function Portfolio(props) {
    return (
        <div className="content-area">
            {/* need to make items clickable so a larger image appears with more information about the project */}
            {/* add Yolly_Dolly streaming overlay and logo */}
            <div id="portfolio">

                <div className="img-container">

                    <img className="portfolio-img" src={require('../portfolio_photos/3D Marble Rendering.jpg')} alt="3D rendering of Whole Herbs bagged powder products on marble platforms" />

                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Puff-Co-Peak-Lightning-Full.gif')} alt="" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Waz-Shop.gif')} alt="" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Whole Herbs Exploded Bottle 1 Page.jpg')} alt="" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/OPMS Gold Purple n Pink 2 Page.jpg')} alt="2 page magazine ad, purple and pink background with OPMS gold products floating on left side and text on the right side" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Yolly_Dolly Offline Banner.jpg')} alt="" />
                    
                </div>

            </div>
        </div>
    );
}

export default Portfolio;