import React from 'react';

function WazShop() {
    return (
        <div className="content-area" id="flex-content">
            {/* Switched from GIF to video for better site performance */}

            {/* <img className="portfolio-item" src={require('../portfolio_photos/Waz-Shop.gif')} alt="GIF of Waz Shop logo with a shifting blurred version of the logo behind it, in front of a black and red background" /> */}

            <video className="portfolio-item" autoPlay loop muted playsInline alt="GIF of Waz Shop logo with a shifting blurred version of the logo behind it, in front of a black and red background">
                <source src={require('../portfolio_photos/Waz-Shop.webm')} />
                <source src={require('../portfolio_photos/Waz-Shop.mp4')} />
            </video>

            <aside className="portfolio-item-info">
                <h2>Client:</h2>
                <p>Partynuts.com</p>
                <br />
                <h2>Project:</h2>
                <p>Featured in a marketing email sent to all customers alerting them to a new brand being carried by the online store</p>
                <br />
                <h2>Tools:</h2>
                <p>Adobe Photoshop</p>
                <br />
                <h2>Status:</h2>
                <p>Sent to customers in November of 2019</p>
            </aside>
        </div>
    );
}

export default WazShop;