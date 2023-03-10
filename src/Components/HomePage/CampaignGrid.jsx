import React from "react";
import { Link } from "react-router-dom";
import "./campaign-grid.css";

export default function CampaignGrid() {
	return (
		// TODO: Compress new images for web viewing
		<main id="grid-container">
			<Link
				to="/opms-ad-campaign"
				className="campaign-item large"
			>
				<img
					src={require("../../portfolio_photos/OPMS/OPMS Silver Purple n Pink 2 Page.jpg")}
					alt="OPMS Kratom 2-page magazine spread featuring floating OPMS Silver capsules and powder packaging floating on the left page and text on the right"
					className="campaign-img"
				/>
			</Link>

			<Link
				to="/email-campaign"
				className="campaign-item"
			>
				<img
					src={require("../../portfolio_photos/Email Marketing/Candy-King-Vape-Out-of-This-World.gif")}
					alt="Candy Kind vape juice floating above the moon"
					className="campaign-img"
				/>
			</Link>

			<Link
				to="/bold-idea-2023-campaign"
				className="campaign-item"
			>
				<img
					src={require("../../portfolio_photos/Bold Idea/Bold Idea T-Shirt Mockup Final.png")}
					alt="Bold Idea t-shirts display front and back designs"
					className="campaign-img"
				/>
			</Link>

			<Link
				to="/nicpack-campaign"
				className="campaign-item large"
			>
				<img
					src={require("../../portfolio_photos/NicPack/NicPack Spread.png")}
					alt="NicPack 2 page magazine spread featuring the NicPack product and packaging on the left and a smoking woman on the right"
					className="campaign-img"
				/>
			</Link>
		</main>
	);
}
