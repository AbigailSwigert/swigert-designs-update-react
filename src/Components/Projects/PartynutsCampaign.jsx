import React from "react";
import FeatureProject from "./FeatureProject";
import ProjectGrid from "./ProjectGrid";
import ProjectHeader from "./ProjectHeader";

export default function PartynutsCampaign() {
	const projectDescription =
		"Partynuts.com provides products in-demand wholesale to brick-and-motor stores all across the U.S. I worked with " +
		"them to revamp their email campaigns and landing page banners to help draw customers' attention to new and popular products. " +
		"On average, each banner and marketing email raised traffic to featured items 20%.";

	const imageObjects = [
		{
			imagePath: require("../../portfolio_photos/Partynuts/Candy-King-Vape-Out-of-This-World.gif"),
			alt: "Candy King vape juice floating above the moon",
		},
		{
			imagePath: require("../../portfolio_photos/Partynuts/Exxus Minis.png"),
			alt: "New Exxus Mini vap pens featuring multiple colors floating in colorful smoke",
		},
		{
			imagePath: require("../../portfolio_photos/Partynuts/Summer Products 2019.png"),
			alt: "Fruity vape juice, CBD, and ceramic projects surrounded by summery flora",
		},
	];

	return (
		<section className="campaign">
			<ProjectHeader
				client="Partynuts.com"
				description={projectDescription}
			/>

			<FeatureProject
				title="Waz Shop Apparel Banner"
				imagePath={require("../../portfolio_photos/Partynuts/Waz-Shop-Banner.webp")}
				alt="Web banner for Waz Shop featuring new sweat shirt designs"
			/>

			<ProjectGrid
				title="Marketing Emails"
				imageObjects={imageObjects}
			/>
		</section>
	);
}
