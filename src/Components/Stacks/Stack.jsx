import React, { useRef, useEffect, useContext } from "react";
import Lottie from "lottie-web";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import "./Stack.css";

const Stack = () => {
	const { isDark } = useContext(StyleContext);
	const s_left = useRef(null);
	useEffect(() => {
		Lottie.loadAnimation({
			container: s_left.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../img/intro.json"),
		});
	}, []);

	const stacks = [
		{
			skillName: "html-5",
			fontAwesomeClassname: "fab fa-html5",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "fab fa-css3-alt",
		},
		// {
		// 	skillName: "sass",
		// 	fontAwesomeClassname: "fab fa-sass",
		// },
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "fab fa-js",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "fab fa-react",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "fab fa-node",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "fab fa-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "fas fa-database",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "fas fa-fire",
		},
	];
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="stack">
				<div className="s_left" ref={s_left}></div>
				<div
					className={`s_right ${isDark ? "lightColorText" : "darkColorText"}`}
				>
					<h3>My Ecosystem</h3>
					<hr />
					<ul className="icons">
						{stacks.map((item) => {
							return (
								<li className="icon" key={item.skillName}>
									<i className={`${item.fontAwesomeClassname}`}></i>
									<p>{item.skillName}</p>
								</li>
							);
						})}
					</ul>
					<ul className="stackDesc">
						<li>Developed Web application using ReactJS and SCSS</li>
						<li>Completed POC in NodeJS</li>
						<li>Worked on SQL Database with .NET framework</li>
					</ul>
				</div>
			</div>
		</Fade>
	);
};

export default Stack;
