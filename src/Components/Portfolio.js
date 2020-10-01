import React from 'react';
import '../App.css';

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
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Choir-Link-Image.png')} alt="Silhouette of a stallion head in front of flowing music notes" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Green Leaf Bag Design- Abigail.jpg')} alt="3D rendering of Green Leaf bag of organic hemp seeds, front and back" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Kratom Kaps Tropical Woman 1 Page.jpg')} alt="Woman in heavy make up holding Kratom Kaps bag of Indo Kratom, surrounded by tropical leaves and fog" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/OPMS Gold Purple n Pink 2 Page.jpg')} alt="2 page magazine ad, purple and pink background with OPMS gold products floating on left side and text on the right side" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Top Kratom Bag Mockup.jpg')} alt="3D rending of Top Kratom bagged powered Kratom, front and back" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Waz-Shop.gif')} alt="Red and Black text reading 'Waz Shop' in front of blurred text shifting back and forth over red and black background of hexagons" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Whole Herbs Holiday 1 Page- Abigail.jpg')} alt="1 page magazine ad of kratom capsules in shape of Christmas tree on white background" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Vaping Woman.png')} alt="Email banner of woman vaping in front of colorful orange background, next to text" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Glass Blower Layout.jpg')} alt="2 page magazine spread of man holing torch to glass atr piece with article title and text wrapping around the glass" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Headspace Logo.png')} alt="Light grey Head Space logo on white background" />
                    
                </div>

                <div className="img-container">
                    
                    <img className="portfolio-img" src={require('../portfolio_photos/Puff-Co-Peak-Lightning-Full.gif')} alt="Puffco Peak lightening dab rig floating in front of white smoke and lime green background" />
                    
                </div>

            </div>
        </div>
    );
}

export default Portfolio;