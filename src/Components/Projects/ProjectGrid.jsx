import React from "react";

export default function ProjectGrid({ title, imageObjects }) {
	const renderedImages = imageObjects.map(imageObject => (
		<img
			key={imageObject.alt}
			src={imageObject.imagePath}
			alt={imageObject.alt}
			className="project-img"
		/>
	));

	return (
		<div>
			<p className="project-title">{title}</p>
			<section className="project-grid">{renderedImages}</section>
		</div>
	);
}
