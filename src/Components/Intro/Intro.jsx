import React, { useContext } from "react";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import StyleContext from "../../Context/StyleContext";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import resumePdf from "../../Sarath Viswanathan M.pdf";
import sarath from "../../img/Sarath_png.png";

import "./Intro.css";

const Intro = () => {
	const { isDark } = useContext(StyleContext);
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="intro" id="home">
				<div className="i-left">
					<div
						className={`${isDark ? "lightColorText" : "darkColorText"} i-name`}
					>
						<span>Hey!</span>
						<span>
							I am <span style={{ color: "var(--orange)" }}>Sarath</span>
						</span>

						<p>
							Front end web developer building world-class web applications who
							looks for metrics and beating former "best-yets". Proficient in an
							assortment of technologies, including JavaScript, HTML, and CSS.
							Certified SAFe 5 Practitioner with experience of having worked on
							larger teams.
						</p>
					</div>

					<div className="buttons">
						<button className="button i-button">Contact Me</button>
						<button
							className="button i-button"
							onClick={() => {
								window.open(resumePdf);
							}}
						>
							See Resume
						</button>
					</div>

					<div className="i-icons">
						<a
							href="https://github.com/sarathviswanathanm"
							target="_blank"
							rel="noreferrer"
						>
							<img src={Github} alt="" />
						</a>
						<a
							href="https://www.linkedin.com/in/sarath-viswanathan-371517141/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={LinkedIn} alt="" />
						</a>
						<a
							href="https://www.instagram.com/sarath_mv/?hl=en"
							target="_blank"
							rel="noreferrer"
						>
							<img src={Instagram} alt="" />
						</a>
					</div>
				</div>

				<div className="i_right">
					<Pulse>
						<div className="myPhotoDiv">
							<div className="photo">
								<img src={sarath} alt="" className="me" />
							</div>
						</div>
					</Pulse>
				</div>
			</div>
		</Fade>
	);
};

export default Intro;
