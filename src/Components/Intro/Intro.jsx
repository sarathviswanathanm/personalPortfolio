import React, { useContext } from "react";
import me from "../../img/Sarath_intro.png";
import github from "../../img/github.png";
import linkedIn from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import StyleContext from "../../Context/StyleContext";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import resumePdf from "../../Sarath Viswanathan M.pdf";

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

						<Fade left cascade>
							<p>
								Front end web developer building world-class web applications
								who looks for metrics and beating former "best-yets". Proficient
								in an assortment of technologies, including JavaScript, HTML,
								and CSS. Certified SAFe 5 Practitioner with experience of having
								worked on larger teams.
							</p>
						</Fade>
					</div>

					<div className="buttons">
						<button
							className="button i-button"
							href="#contact"
							onClick={() => {
								window.scrollTo(0, 100000);
							}}
						>
							Contact Me
						</button>
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
							<img src={github} alt="" />
						</a>
						<a
							href="https://www.linkedin.com/in/sarath-viswanathan-371517141/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkedIn} alt="" />
						</a>
						<a
							href="https://www.instagram.com/sarath_mv/?hl=en"
							target="_blank"
							rel="noreferrer"
						>
							<img src={instagram} alt="" />
						</a>
					</div>
				</div>

				<div className="i_right">
					<Pulse>
						<div className="myPhotoDiv">
							<div className="photo">
								<img src={me} alt="" className="me" />
							</div>
						</div>
					</Pulse>
				</div>
			</div>
		</Fade>
	);
};

export default Intro;
