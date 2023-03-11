import React from "react";

export default function FeatureProject({ title, imagePath, alt }) {
	return (
		<div>
			<p className="project-title">{title}</p>
			<section className="feature-project">
				<img
					src={imagePath}
					alt={alt}
					className="feature-project-img"
					style={{ maxWidth: "800px" }}
				/>
			</section>
		</div>
	);
}
