import React from 'react';

//TODO: make all portfolio items load in this one component

function PortfolioItem() {
    return (
        <div className="content-area" id="flex-content">
            <div className="portfolio-item-set">
                <img className="portfolio-item" alt="" />
                <img className="portfolio-item" alt="" />
                <img className="portfolio-item" alt="" />
            </div>
            <aside className="portfolio-item-info">
                <h2>Client:</h2>
                <p></p>
                <br />
                <h2>Project:</h2>
                <p></p>
                <br />
                <h2>Tools:</h2>
                <p></p>
                <br />
                <h2>Status:</h2>
                <p></p>
            </aside>
        </div>
    );
}

export default PortfolioItem;