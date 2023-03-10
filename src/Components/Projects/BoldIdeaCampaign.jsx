import React from "react";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectHeader from "./ProjectHeader";
import FeatureProject from "./FeatureProject";
import ProjectGrid from "./ProjectGrid";

export default function BoldIdeaCampaign() {
	const projectDescription =
		"Since 2015, Bold Idea has helped students discover computer science through hands-on learning and mentoring by industry professionals, " +
		"building critical thinking skills and equipping students to succeed in the careers of the future. In 2023, they reached out to me to help " +
		"them bring their retro theme for the year to life. Each design harkens back to the early days of the internet and personal computers while " +
		"acknowledging that this year's students are the future of computer science.";

	const imageObjects = [
		{
			imagePath: require("../../portfolio_photos/Bold Idea/Bold Idea English Flyer.jpg"),
			alt: "Bold Idea coding club retro flyer in English",
		},
		{
			imagePath: require("../../portfolio_photos/Bold Idea/Bold Idea Spanish Flyer.jpg"),
			alt: "Bold Idea coding club retro flyer in Spanish",
		},
	];

	return (
		<section className="campaign">
			<ProjectHeader
				client="Bold Idea"
				description={projectDescription}
			/>

			<FeatureProject
				title="Social Media Post"
				imagePath={require("../../portfolio_photos/Bold Idea/Bold Idea Event Social Post.jpg")}
				alt="Retro style social media post for Bold Idea happy hour"
			/>

			<ProjectGrid
				title="Club Flyers"
				imageObjects={imageObjects}
			/>

			<p className="project-title">Club T-Shirts</p>

			<Carousel
				showArrows={true}
				className="project-carousel"
			>
				<div>
					<img
						src={require("../../portfolio_photos/Bold Idea/Bold Idea T-Shirt Mockup Draft.png")}
						alt="Draft retro style design for Bold Idea 2023 T-shirts"
					/>
					<p className="legend">2023 Bold Idea T-Shirt Rejected Design</p>
				</div>
				<div>
					<img
						src={require("../../portfolio_photos/Bold Idea/Bold Idea T-Shirt Mockup Final.png")}
						alt="Final retro style design for 2023 Bold Idea T-Shirts"
					/>
					<p className="legend">2023 Bold Idea T-Shirt Final Design</p>
				</div>
			</Carousel>

			<FeatureProject
				title="Mentor Flyer"
				imagePath={require("../../portfolio_photos/Bold Idea/Bold Idea Mentor Flyer 2023.jpg")}
				alt="Retro style flyer to encourage volunteering with Bold Idea"
			/>
		</section>
	);
}
