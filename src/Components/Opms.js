import React from 'react';

function Opms() {
    return (
        <div className="content-area" id="flex-content">
            <div className="portfolio-item-set">
                <img className="portfolio-item" src={require('../portfolio_photos/OPMS Gold Purple n Pink 2 Page.jpg')} alt="2 page magazine ad, purple and pink background with OPMS Gold products floating on left side and text on the right side" />
                <img className="portfolio-item" src={require('../portfolio_photos/OPMS Silver Purple n Pink 2 Page.jpg')} alt="2 page magazine ad, purple and pink background with OPMS Silver products floating on left side and text on the right side"  />
                <img className="portfolio-item" src={require('../portfolio_photos/OPMS Liquid Purple n Pink 2 Page.jpg')} alt="2 page magazine ad, purple and pink background with OPMS Liquid products floating on left side and text on the right side"  />
            </div>
            <aside className="portfolio-item-info">
                <h2>Client:</h2>
                <p>OPMS Kratom</p>
                <br />
                <h2>Project:</h2>
                <p>Three part two page spread magazine ads featuring the brand's three different product lines</p>
                <br />
                <h2>Tools:</h2>
                <p>Adobe Photoshop<br />
                   Cannon DSLR Camera</p>
                <br />
                <h2>Status:</h2>
                <p>Printed in three separate issues of HQ Magazine:<br />
                   Gold: May 2020 issue<br />
                   Liquid: July 2020 issue<br />
                   Silver: August 2020 issue</p>
            </aside>
        </div>
    );
}

export default Opms;