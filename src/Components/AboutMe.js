import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function AboutMe() {
    return (
        <div className="App">
            <div className="navPane full-bg">
                <Link to='/'><img id='logo' src={require('../assets/swigert_designs_logo_white.png')} alt='Swigert Designs logo in white' /></Link>
                <header>
                    <h1 className="titleText">About Me</h1>
                    <nav>
                        <ul>
                            <li><Link to='/aboutme'>About Me</Link></li>
                            <li><Link to='/resume'>Resume</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>

            <div id="bio">
                <p>Hello, my name is Abigail Swigert! I Graduated from UNT in 2018 with a B.A. in Design Management. After graduation, I worked as a Graphic Designer in Downtown Dallas for 2 years. Then, in May of 2020 I enrolled in a full-stack bootcamp to make a career change to software development, after graduating from TEKcamp I accepted a job as a Jr. Developer at TEKsystems Global Services .<br /><br />
                My hobbies include:
                    <ul>
                        <li>Playing video games</li>
                        <li>Reading</li>
                        <li>Cooking/Baking</li>
                        <li>Playing Board/Card Games</li>
                    </ul>
                </p>
                <div id="music">
                    <a href="https://www.youtube.com/watch?v=KCec0v0Btbo" target="_blank" rel="noopener noreferrer" aria-roledescription="image">
                        <img className="musicIcons" src={require('../assets/ECHO.png')} alt="Circular icon for the Starset song Echo in black and white" />
                    </a>

                    <a href="https://www.youtube.com/watch?v=wHK1q8srtMo" target="_blank" rel="noopener noreferrer" aria-roledescription="image">
                        <img className="musicIcons" src={require('../assets/OTHER WORLDS THAN THESE.png')} alt="Circular icon for the Starset song Other Worlds Than These in black and white" />
                    </a>

                    <a href="https://www.youtube.com/watch?v=0dG9pXeOgT0" target="_blank" rel="noopener noreferrer" aria-roledescription="image">
                        <img className="musicIcons" src={require('../assets/TRIALS.png')} alt="Circular icon for the Starset song Trials in black and white" />
                    </a>

                    <a href="https://www.youtube.com/watch?v=MfqVlwetWfY" target="_blank" rel="noopener noreferrer" aria-roledescription="image">
                        <img className="musicIcons" src={require('../assets/FAULTLINE.png')} alt="Circular icon for the Starset song Faultline in black and white" />
                    </a>
                    
                </div>
                <small>Click these icons to hear some of my favorite STARSET songs (Opens YouTube in another window).</small>
            </div>
            <img id="headshot" src={require('../assets/Profile Photo.jpg')} alt="Abigail Swigert" />
        </div>
  );
}

export default AboutMe;
