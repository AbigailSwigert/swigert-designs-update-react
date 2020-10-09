import React from 'react';

function YollyDolly() {
    return (
        <div className="content-area" id="flex-content">
            <div className="portfolio-item-set">
                <img className="portfolio-item" src={require('../portfolio_photos/Yolly_Dolly Logo-03-Pink.png')} style={{width:"50%"}} alt="Logo of waving toy doll from the waist up, with a pink ribbon beneath with the text 'Yolly_Dolly' across it" />
                <img className="portfolio-item" src={require('../portfolio_photos/Yolly_Dolly Offline Banner.jpg')} alt="Yolly_Dolly logo of waving toy doll in front of a purple and blue space background, text underneath reading 'Offline, check back again soon!'" />
                <img className="portfolio-item" src={require('../portfolio_photos/Yolly_Dolly Streaming Overlay.png')} alt="Purple and blue space background overlay with 3 rectangles cut out, the largest with a shelf over it holding 3 dolls, the smallest rectangle has a pink banner beneath it with the text 'Yolly_Dolly'" />
            </div>
            <aside className="portfolio-item-info">
                <h2>Client:</h2>
                <p>Yolanda "Yolly_Dolly" Rodriguez</p>
                <br />
                <h2>Project:</h2>
                <p>Streaming package for Twitch Streamer Yolly_Dolly, including logo, offline banner, and streaming overlay</p>
                <br />
                <h2>Tools:</h2>
                <p>Adobe Illustrator</p>
                <br />
                <h2>Status:</h2>
                <p>Project completed and delivered to client in March of 2020, client began using the deliverables on Twitch that same month</p>
            </aside>
        </div>
    );
}

export default YollyDolly;