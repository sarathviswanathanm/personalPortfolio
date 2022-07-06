import React, { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import Fade from "react-reveal/Fade";
import GL from "../../img/gl_logo.png";

import "./Experience.css";

const Experience = () => {
	const org = useRef(null);
	useEffect(() => {
		Lottie.loadAnimation({
			container: org.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../img/org.json"),
		});
	}, []);
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="experience" id="experience">
				<h3>My Career</h3>
				<div className="card" style={{ backgroundColor: "transparent" }}>
					<div className="card-body experience_body">
						<h5>Software Engineer</h5>
						<hr />
						<div className="experience_content">
							<div className="e-left">
								<div className="company_logo">
									<img src={GL} alt="" />
									<span className="company">GlobalLogic</span>
								</div>
							</div>
							<div className="e-middile">
								<Fade left cascade>
									<ul className="experienceDesc">
										<li>
											Developed Web UI Components using ReactJs for Admin
											Dashboard system which gives all critical information
											about CSR activities and their expenditure and helps in
											tracking and managing financial budgets.
										</li>
										<li>Implemented state management using context API.</li>
										<li>
											Created reusable UI components using ReactJS and SCSS.
										</li>
										<li>Prepared POCs in React, Node and VB6.</li>
										<li>
											Developed Web UI components and pages for an Insurance
											Decision portal.
										</li>
										<li>
											Worked on VB6 legacy code for an Insurance Decision
											portal.
										</li>
										<li>
											Became a point of contact person for certain project
											deliverable workflow activities.
										</li>
										<li>
											Collaborated with the DevOps team to identify and fix
											issues in the deployment of the project.
										</li>
									</ul>
								</Fade>
							</div>
							<div className="e-right">
								<div className="org" ref={org}></div>
								<span className="time-span">Oct 2019-Jan 2022</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Experience;
