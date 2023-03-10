import React from "react";
import "./contact-menu.css";

export default function ContactMenu() {
	return (
		<aside id="contact-menu">
			<a
				href="https://www.linkedin.com/in/abigailswigert/"
				target="_blank"
				rel="noreferrer noopener"
			>
				LinkedIn
			</a>
			<a
				href={require("../assets/Abigail Swigert Designer Resume.pdf")}
				target="_blank"
				rel="noreferrer noopener"
			>
				Resume
			</a>
			<a href="mailto:abigail@swigertdesigns.com">abigail@swigertdesigns.com</a>
		</aside>
	);
}
