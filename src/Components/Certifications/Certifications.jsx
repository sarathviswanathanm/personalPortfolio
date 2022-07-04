import React, { useContext } from "react";
import WebDevelopment from "../../img/certificates/WebDevelopment.jpeg";
import Safe5 from "../../img/certificates/SAFe5.jpg";
import WebSecurity from "../../img/certificates/WebSecurity.jpg";
import CleanCoding from "../../img/certificates/CleanCoding.jpg";
import Fade from "react-reveal/Fade";
import StyleContext from "../../Context/StyleContext";

import "./Certifications.css";

const certification = [
	{
		name: "Web Development Bootcamp",
		image: WebDevelopment,
		description:
			"The Complete 2022 Web Development Bootcamp - 65.5hrs(04/2022)",
	},
	{
		name: "SAFe5 Practitioner",
		image: Safe5,
		description: "Certified SAFe® 5 Practitioner (10/2021)",
	},
	{
		name: "Clean Coding Practies",
		image: CleanCoding,
		description: "Agile Software Development: Clean Coding Practices (02/2021)",
	},
	{
		name: "Web Security",
		image: WebSecurity,
		description: "Programming Foundations: Web Security (11/2020)",
	},
];

const Certifications = () => {
	const { isDark } = useContext(StyleContext);
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="certifications" id="certifications">
				<h3>Certifications</h3>
				<hr />
				<div className="certificates">
					{certification.map((certificate) => (
						<div
							className="card customCard"
							style={{
								backgroundColor: isDark ? "var(--darkBackground)" : "",
							}}
							onClick={() => {
								window.open(certificate.image);
							}}
						>
							<img src={certificate.image} alt="" />
							<div className="con-text">
								<h3>{certificate.name}</h3>
								<p>{certificate.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Fade>
	);
};

export default Certifications;
