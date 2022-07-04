import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import sarath from "../../img/sarath.jpg";
import Headroom from "react-headroom";
import "./Navbar.css";

import StyleContext from "../../Context/StyleContext";

const pages = [
	"Stacks",
	"Experience",
	"Certifications",
	"Projects",
	"Education",
	"Gallery",
	"Contact",
];

const Navbar = () => {
	const { isDark } = useContext(StyleContext);
	return (
		<Headroom>
			<nav
				className={`navbar navbar-expand-lg navbar-light bg-white ${
					isDark ? "dark-menu" : ""
				}`}
			>
				<div className="container-fluid">
					<a
						className="navbar-brand"
						href="/home"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Avatar
							src={sarath}
							alt="logo"
							sx={{
								mr: 1.5,
							}}
						/>
						<span
							className={`sarath ${
								isDark ? "lightColorText" : "darkColorText"
							}`}
						>
							Sarath
						</span>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						style={{ border: "none" }}
					>
						<label htmlFor="checkbox" className="hamburger">
							<input type="checkbox" id="checkbox" />
							<span className="line line-main"></span>
							<span className="line line-split"></span>
						</label>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{pages.map((page) => (
								<li className="nav-item" key={page}>
									<a
										className={`menuItem nav-link ${
											isDark ? "lightColorText" : "darkColorText"
										}`}
										aria-current="page"
										href="/home"
										style={{
											fontFamily: "monospace",
											fontSize: "1.2rem",
											padding: "0px, 5px",
										}}
									>
										{page}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</Headroom>
	);
};
export default Navbar;
