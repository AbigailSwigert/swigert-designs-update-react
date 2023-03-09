import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
	return (
		<nav>
			<Link to="." className="nav-link selected">Work</Link>
			<img
				src={require("../assets/swigert_designs_logo.png")}
				alt="Swigert Designs Logo"
				height="100px"
			/>
			<p>About</p>
		</nav>
	);
}