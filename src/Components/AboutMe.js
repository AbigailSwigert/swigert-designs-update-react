import React from 'react';
import '../App.css';

function AboutMe() {
  return (
    <div className="App">
      <div className="navPane">

        <header>
          <p className="titleText">Abigail Swigert
                <br />
            <span className="subTitle">About Me</span>
            </p>
            <nav>
                <ul>
                  <li>About Me</li>
                  <li>Resume</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
                </ul>
            </nav>
        </header>

      </div>
      <div id="bio">
        <p>Hello, my name is Abigail Swigert! I Graduated from The University of North Texas in 2018 with a B.A. in Design Management. After graduation, I worked as a Graphic Designer in Downtown Dallas for 2 years. Currently, I am enrolled in a Full Stack Bootcamp with Teksystems Global Services.<br /><br />
        My hobbies include:
          <ul>
              <li>Playing video games</li>
              <li>Reading</li>
              <li>Cooking/Baking</li>
              <li>Playing Board/Card Games</li>
          </ul>
        </p>
        <div id="music">
          <a href="https://www.youtube.com/watch?v=KCec0v0Btbo" target="_blank"><img className="musicIcons" src="Index Images/ECHO.png" /></a>
          <a href="https://www.youtube.com/watch?v=wHK1q8srtMo" target="_blank"><img className="musicIcons" src="Index Images/OTHER WORLDS THAN THESE.png" /></a>
          <a href="https://www.youtube.com/watch?v=0dG9pXeOgT0" target="_blank"><img className="musicIcons" src="Index Images/TRIALS.png" /></a>
          <a href="https://www.youtube.com/watch?v=MfqVlwetWfY" target="_blank"><img className="musicIcons" src="Index Images/FAULTLINE.png" /></a>
        </div>
        <small>Click these icons to hear some of my favorite STARSET songs (Opens in YouTube).</small>
      </div>
    </div>
  );
}

export default AboutMe;
