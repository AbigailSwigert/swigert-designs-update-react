import React from "react";
import "./about.css";

export default function About() {
	return (
		<main id="about">
			<img
				src={require("../../assets/Abigail on TBird.png")}
				alt="Abigail Swigert laying on the hood of a white 1967 Ford Thunderbird"
				id="about-img"
			/>

			<div id="info-container">
				<p>Hey there! I'm</p>
				<h1 className="gradient-text">Abigail Swigert,</h1>
				<p>
					an award-winning multidisciplinary graphic designer based in Carrollton, Texas. I graduated from the
					University of North Texas with a B.A in Design Management, and I have over 5 years of experience working with
					individuals and organizations of all sizes to craft engaging print and digital marketing collateral.
					<br />
					<br />
					When I'm not honing my design skills, I enjoy getting lost in fantasy and science fiction stories, and
					examining the themes and deeper meanings of my favorite games, movies, and TV shows. You can find me
					supporting and hosting events for DFW Creatives and Bold Idea.
				</p>
				<div id="awards">
					<div className="award">
						<img
							src={require("../../assets/Blue Ribbon.png")}
							alt="Blue ribbon award icon"
						/>
						<small>1st place blue ribbon in Brand Identity Design - SkillsUSA District Level</small>
					</div>

					<div className="award">
						<img
							src={require("../../assets/Blue Ribbon.png")}
							alt="Blue ribbon award icon"
						/>
						<small>1st place blue ribbon in Brand Identity Design - SkillsUSA State Level</small>
					</div>

					<div className="award">
						<img
							src={require("../../assets/Gold Medal.png")}
							alt="Gold Medal award icon"
						/>
						<small>Gold Medal in Advertising Design - SkillsUSA District Level</small>
					</div>

					<div className="award">
						<img
							src={require("../../assets/Bronze Medal.png")}
							alt="Bronze Medal award icon"
						/>
						<small>Bronze Medal in Advertising Design - SkillsUSA State Level</small>
					</div>
				</div>
			</div>
		</main>
	);
}
