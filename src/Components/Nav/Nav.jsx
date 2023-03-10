import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
	return (
		<nav>
			<NavLink
				to="/"
				className="nav-link"
			>
				Work
			</NavLink>
			<img
				src={require("../../assets/swigert_designs_logo.png")}
				alt="Swigert Designs Logo"
				id="logo"
			/>
			<NavLink
				to="/about"
				className="nav-link"
			>
				About
			</NavLink>
		</nav>
	);
}
