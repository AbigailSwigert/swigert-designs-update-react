import React from "react";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectHeader from "./ProjectHeader";
import FeatureProject from "./FeatureProject";
import ProjectGrid from "./ProjectGrid";

export default function OPMSCampaign() {
	const projectDescription =
		"O.P.M.S. has been an industry-leading supplier of Kratom extract for more than 10 years. By utilizing a patented extraction process, they have set a new" +
		" quality and unrivaled standard in the botanicals market. With so much competition in the market, they decided it was time to shift their focus to being" +
		" a high-end brand that would define the future of the industry.";

	const imageObjects = [
		{
			imagePath: require("../../portfolio_photos/OPMS/OPMS Gold Purple n Pink 2 Page.jpg"),
			alt: "OPMS Kratom 2-page magazine spread featuring OPMS GOLD capsules products floating on the left page and text on the right",
		},
		{
			imagePath: require("../../portfolio_photos/OPMS/OPMS Silver Purple n Pink 2 Page.jpg"),
			alt: "OPMS Kratom 2-page magazine spread featuring OPMS Silver capsules and powder products floating on the left page and text on the right",
		},
		{
			imagePath: require("../../portfolio_photos/OPMS/OPMS Liquid Purple n Pink 2 Page.jpg"),
			alt: "OPMS Kratom 2-page magazine spread featuring OPMS Liquid products floating on the left page and text on the right",
		},
	];

	return (
		<section className="campaign">
			<ProjectHeader
				client="O.P.M.S. Kratom"
				description={projectDescription}
			/>

			<FeatureProject
				title="Email Header"
				imagePath={require("../../portfolio_photos/OPMS/New OPMS Liquid Partynuts Banner.png")}
				alt="OPMS Liquid Kratom bottom floating in Bronze Liquid"
			/>

			<ProjectGrid
				title="Magazine Campaign"
				imageObjects={imageObjects}
			/>

			<Carousel
				showArrows={true}
				className="project-carousel"
			>
				<div>
					<img
						src={require("../../portfolio_photos/OPMS/OPMS Gold Magazine Mockup.png")}
						alt="OPMS Kratom 2-page magazine spread featuring floating OPMS GOLD capsules products floating on the left page and text on the right"
					/>
					<p className="legend">
						O.P.M.S. Gold Magazine Mockup
						<br />
						<small>
							<a
								href="http://www.freepik.com"
								className="attribution"
							>
								Mockup design provided by Aleksandr_Samochernyi / Freepik
							</a>
						</small>
					</p>
				</div>
				<div>
					<img
						src={require("../../portfolio_photos/OPMS/OPMS Silver Magazine Mockup.png")}
						alt="OPMS Kratom 2-page magazine spread featuring floating OPMS Silver capsules and powder products floating on the left page and text on the right"
					/>
					<p className="legend">
						O.P.M.S. Silver Magazine Mockup
						<br />
						<small>
							<a
								href="http://www.freepik.com"
								className="attribution"
							>
								Mockup design provided by Aleksandr_Samochernyi / Freepik
							</a>
						</small>
					</p>
				</div>
				<div>
					<img
						src={require("../../portfolio_photos/OPMS/OPMS Liquid Magazine Mockup.png")}
						alt="OPMS Kratom 2-page magazine spread featuring floating OPMS Liquid products floating on the left page and text on the right"
					/>
					<p className="legend">
						O.P.M.S. Liquid Magazine Mockup
						<br />
						<small>
							<a
								href="http://www.freepik.com"
								className="attribution"
							>
								Mockup design provided by Aleksandr_Samochernyi / Freepik
							</a>
						</small>
					</p>
				</div>
			</Carousel>
		</section>
	);
}
