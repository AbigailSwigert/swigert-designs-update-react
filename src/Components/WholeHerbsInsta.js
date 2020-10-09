import React from 'react';

function WholeHerbsInsta() {
    return (
        <div className="content-area" id="flex-content">
            <img className="portfolio-item" src={require('../portfolio_photos/3D Marble Rendering.jpg')} alt="3D rendering of Whole Herbs bagged powder products on marble platforms" />
            <aside className="portfolio-item-info">
                <h2>Client:</h2>
                <p>Whole Herbs Kratom</p>
                <br />
                <h2>Project:</h2>
                <p>Instagram post showcasing new packaging design</p>
                <br />
                <h2>Tools:</h2>
                <p>Adobe Dimension<br />
                   Adobe Photoshop</p>
                <br />
                <h2>Status:</h2>
                <p>Posted to @wholeherbskratom Instagram December 4th, 2019</p>
            </aside>
        </div>
    );
}

export default WholeHerbsInsta;