import React from "react";
import "./project-grid.css";

export default function ProjectGrid() {
	return (
        // TODO: sort images into project folders
		<main id="grid-container">
			<img
				src={require("../portfolio_photos/OPMS Silver Purple n Pink 2 Page.jpg")}
				alt="OPMS Kratom 2-page Magazine Spread"
				className="project large"
			/>
            <img
				src={require("../portfolio_photos/3D Marble Rendering.jpg")}
				alt="3D rendering of Whole Herbs bagged powder products on marble platforms"
				className="project"
			/>
            <img
				src={require("../portfolio_photos/Bold Idea T-Shirt Mockup Final.png")}
				alt="Bold Idea t-shirts display front and back designs"
				className="project"
			/>
		</main>
	);
}
