import React from 'react';
import '../App.css';
import '../Homepage.css';

function HomePage() {
    return (
        <div className="content-area">

            <div id="bio">
            <h3>Biography:</h3>
                <p>Abigail Swigert is an award-winning multidisciplinary graphic designer based in Carrollton, Texas. A graduate of the University of North Texas in Design Management, she has over 5 years of experience working with individuals and organizations of all sizes to craft engaging print and digital marketing collateral.</p>
                
                <p>When Abigail isn't honing her design skills, she enjoys getting lost in fantasy and science fiction stories, and examining the themes and deeper meanings of her favorite games, movies, and TV shows. You can find her supporting and hosting events for DFW Creatives and Bold Idea.</p>

                <h3>Proven Capabilities:</h3>
                <ul>
                    <li>Brand identity systems</li>
                    <li>Web design and development</li>
                    <li>Infographics</li>
                    <li>Packaging Design</li>
                    <li>Magazine Layout</li>
                    <li>Social media campaigns</li>
                    <li>Email marketing</li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;