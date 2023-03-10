import React from "react";

export default function ProjectHeader({ client, description }) {
	return (
		<header className="project-header">
			<p>The Client:</p>
			<h1 className="gradient-text">{client}</h1>
			<p>{description}</p>
		</header>
	);
}
