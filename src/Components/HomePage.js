import React from 'react';
import '../App.css';
import '../Homepage.css';

function HomePage() {
    return (
        <div className="content-area">
            <div id="fading-img-container">
                <img className="fading-img" src={require('../portfolio_photos/Nathan Does Logo Final-B-03.png')} />
                <img className="fading-img" src={require('../portfolio_photos/Liquid K 1 Page.jpg')} />
                <img className="fading-img" src={require('../portfolio_photos/Yolly_Dolly Logo-03-Pink.png')} />
                <img className="fading-img" src={require('../portfolio_photos/Hemps Abstract Citrus 1 Page.jpg')} />
            </div>
            {/* TODO: Need some sort of image here, possibly some sort of Design icon */}
            <p id='company-description'>Swigert Designs is the personal brand of Abigail Swigert, a professional Freelance Designer specializing in print, digital, and web design.
                    In her 10 years of Graphic Design experience and 5 years of Web Design experience, Abigail has worked for a number of clients across multiple
                    industries to bring them the perfect design solution for their business.
            </p>
        </div>
    );
}

export default HomePage;