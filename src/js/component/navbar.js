import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fa-solid fa-book-journal-whills fa-2xl ms-3"></i>
				</span>
			</Link>
			<div className="text-center">
				<h2 className="text-success">Star Wars Listed</h2>
			</div>
			<div className="ml-auto">
					<button className="btn btn-primary me-2">Favorite!</button>
			</div>
		</nav>
	);
};
