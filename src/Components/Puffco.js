import React from 'react';

function Puffco() {
    return (
        <div className="content-area" id="flex-content">
            <img className="portfolio-item" src={require('../portfolio_photos/Puff-Co-Peak-Lightning-Full.gif')} alt="GIF of PuffCo Peak Lightning Dab Rig floating in front of lime green background and white smoke" />
            <aside className="portfolio-item-info">
                <h2>Client:</h2>
                <p>Partynuts.com</p>
                <br />
                <h2>Project:</h2>
                <p>Featured in a marketing email sent to all customers showcasing a new product available for sale, the Puffco Peak Lightning Dab Rig</p>
                <br />
                <h2>Tools:</h2>
                <p>Adobe Photoshop<br />
                   Cannon DSLR Camera</p>
                <br />
                <h2>Status:</h2>
                <p>Sent to customers in December of 2019</p>
            </aside>
        </div>
    );
}

export default Puffco;