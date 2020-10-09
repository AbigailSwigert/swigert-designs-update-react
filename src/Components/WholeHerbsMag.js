import React from 'react';

function WholeHerbsMag() {
    return (
        <div className="content-area" id="flex-content">
            <img className="portfolio-item" src={require('../portfolio_photos/Whole Herbs Exploded Bottle 1 Page.jpg')} alt="Whole Herbs bottle with Kratom capsules exploding out of the top, and blocks of text pointing to individual pills" />
            <aside className="portfolio-item-info">
                <h2>Client:</h2>
                <p>Whole Herbs Kratom</p>
                <br />
                <h2>Project:</h2>
                <p>1 page B2B magazine ad featuring their encapsulated Kratom product, and explaining its benefits</p>
                <br />
                <h2>Tools:</h2>
                <p>Adobe Illustrator<br />
                   Adobe Photoshop<br />
                   Cannon DSLR Camera</p>
                <br />
                <h2>Status:</h2>
                <p>Printed in the April 2019 issue of HQ Magazine</p>
            </aside>
        </div>
    );
}

export default WholeHerbsMag;