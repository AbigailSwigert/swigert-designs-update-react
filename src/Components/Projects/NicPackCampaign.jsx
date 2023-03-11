import React from "react";
import FeatureProject from "./FeatureProject";
import ProjectHeader from "./ProjectHeader";

export default function NicPackCampaign() {
	const projectDescription =
		"NicPack pillow packs provide an easy and efficient way to add the exact amount of nicotine you want " +
		"to your favorite zero-nicotine e-juice. A fairly newcomer to the e-juice market, NicPak required many " +
		"different kinds of marketing material to help their brand become known. Our aim was to get as much " +
		"information about the product in front of viewers while showing how much freedom the product could add to their lives.";

	return (
		<section className="campaign">
			<ProjectHeader
				client="NicPack"
				description={projectDescription}
			/>

			<FeatureProject
				title="Banner Ad"
				imagePath={require("../../portfolio_photos/NicPack/Vaping Woman.png")}
				alt="NicPack banner ad displaying product next to woman vaping"
			/>

			<p className="project-title">Magazine Advertisement</p>
			<section className="feature-project">
				<img
					src={require("../../portfolio_photos/NicPack/NicPack Spread.png")}
					alt="NicPack 2-page magazine spread featuring product info on the left and a woman vaping on the right"
					className="feature-project-img"
					style={{ maxWidth: "800px" }}
				/>
			</section>
			<section className="feature-project">
				<img
					src={require("../../portfolio_photos/NicPack/NicPack Spread Mockup.png")}
					alt="Mock up of NicPack 2-page magazine spread featuring product info on the left and a woman vaping on the right"
					className="feature-project-img"
					style={{ maxWidth: "800px" }}
				/>
			</section>

			<FeatureProject
				title="Marketing Email"
				imagePath={require("../../portfolio_photos/NicPack/NicPack-Chart.gif")}
				alt="NicPack marketing email displaying a chart of their different product offerings"
			/>
		</section>
	);
}
