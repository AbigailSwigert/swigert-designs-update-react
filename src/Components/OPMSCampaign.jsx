import React from "react";
import "./project.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function OPMSCampaign() {
	return (
		<section>
			<header className="project-header">
				<p>The Client:</p>
				<h1 className="gradient-text">O.P.M.S. Kratom</h1>
				<p>
					O.P.M.S. has been an industry-leading supplier of Kratom extract for more than 10 years. By utilizing a
					patented extraction process, they have set a new quality and unrivaled standard in the botanicals market. With
					so much competition in the market, they decided it was time to shift their focus to being a high-end brand
					that would define the future of the industry.
				</p>
			</header>

			<section className="feature-product">
				<p className="sm-project-title">Email Header</p>
				<img
					src={require("../portfolio_photos/OPMS/New OPMS Liquid Partynuts Banner.png")}
					alt=""
					className="feature-project-img"
				/>
			</section>

			<section className="sm-project-grid">
				<p className="sm-project-title">Magazine Campaign</p>

				<img
					src={require("../portfolio_photos/OPMS/OPMS Gold Purple n Pink 2 Page.jpg")}
					alt="OPMS Kratom 2-page magazine spread featuring floating OPMS GOLD capsules products floating on the left page and text on the right"
					className="sm-project-img"
				/>
				<img
					src={require("../portfolio_photos/OPMS/OPMS Silver Purple n Pink 2 Page.jpg")}
					alt="OPMS Kratom 2-page magazine spread featuring floating OPMS Silver capsules and powder products floating on the left page and text on the right"
					className="sm-project-img"
				/>
				<img
					src={require("../portfolio_photos/OPMS/OPMS Liquid Purple n Pink 2 Page.jpg")}
					alt="OPMS Kratom 2-page magazine spread featuring floating OPMS Liquid products floating on the left page and text on the right"
					className="sm-project-img"
				/>
			</section>

			<Carousel
				showArrows={true}
				className="project-carousel"
			>
				<div>
					<img
						src={require("../portfolio_photos/OPMS/OPMS Gold Magazine Mockup.png")}
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
						src={require("../portfolio_photos/OPMS/OPMS Silver Magazine Mockup.png")}
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
						src={require("../portfolio_photos/OPMS/OPMS Liquid Magazine Mockup.png")}
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
