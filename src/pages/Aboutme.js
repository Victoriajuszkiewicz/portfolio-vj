import React from "react";
import "./Aboutme.css";

import profile from "../img/profile.jpg";
import dribble from "../icons/dribble.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import js from "../icons/js.png";
import css from "../icons/css.png";
import html from "../icons/html.png";
import bootstrap from "../icons/bootstrap.png";
import vue from "../icons/vuejs.png";
import visual from "../icons/visual.png";
import react from "../icons/react.png";
import typescript from "../icons/typescript.png";
import spain from "../icons/spain.jpg";

const Aboutme = () => {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");
	};
	return (
		<div id="Aboutme">
			<div className="aboutmesection">
				<div className="container">
					<div className="row align-items-start" id="thewholerow">
						<div className="col-12 col-lg-5" id="aboutmetext">
							<h2>About me</h2>
							<p className="longtext">
								Front-End web developer with 5 years of social media manager
								experience.
								<br />
								Combining my technical and social media skills to build tech
								solutions that have a{" "}
								<strong>real positive impact on the user.</strong>🐱‍💻
								<br />
								<br />
								Being a freelancer taught me to manage my workdays and
								prioritise my tasks to meet deadlines. Being on my own, I had to
								<strong> constantly learn</strong> and expand my knowledge in
								many different areas: content creation, influencer marketing,{" "}
								<strong>problem-solving,</strong>
								and client relations.With these skills, I created viral content
								that reached up to 1M views for my clients.
								<br />
								<br />
								The Social media manager role allowed me to travel and learn
								about different countries and cultures which transformed in a
								need of being part of a diverse team - with different
								perspectives and new approaches to{" "}
								<strong>create better solutions.</strong> My passion for
								learning and problem-solving has led me to
								<strong> transition into tech</strong> where I am constantly
								faced with new challenges and opportunities.
							</p>
							<div class="d-flex flex-row bd-highlight mb-3">
								<div className="p-2 bd-highlight">
									<p>
										<strong>Check Me Out On</strong>{" "}
									</p>
								</div>
								<img
									id="icongraphic"
									src={github}
									style={{ width: 40, height: 50, paddingTop: 7, margin: 0 }}
									alt="this is github portfolio icon"
									role="link"
									onClick={() =>
										openInNewTab("https://github.com/Victoriajuszkiewicz")
									}
								/>
								<div className="p-2 bd-highlight">
									<img
										id="icongraphic"
										src={linkedin}
										href="https://github.com/Victoriajuszkiewicz"
										style={{ width: 40, paddingRight: 5 }}
										alt="this is linkedin icon"
										role="link"
										onClick={() =>
											openInNewTab(
												"https://www.linkedin.com/in/victoria-juszkiewicz-webdev/"
											)
										}
									/>
									<img
										id="icongraphic"
										src={dribble}
										style={{ width: 40 }}
										alt="this is dribble potfolio icon"
										role="link"
										onClick={() =>
											openInNewTab("https://dribbble.com/victoria_juszkiewicz")
										}
									/>
								</div>
							</div>
						</div>

						<div
							className="col-12 col-lg-5 justify-content-center"
							id="imagecolumn"
						>
							<img
								src={profile}
								className="profileimage"
								alt="this is a profile picture of web developer Victoria"
							/>
						</div>
					</div>
					<div className="techstacktext">
						<div className="container" id="techstack">
							<h2>My Tech stack</h2>
							<p>
								Using a combination of cutting-edge technologies and reliable
								open-source software I build user-focused, performant apps and
								websites for smartphones, tablets, and desktops.
							</p>
							<img src={js} style={{ width: 40 }} alt="js" />
							<img src={html} style={{ width: 40 }} alt="html" />
							<img src={css} style={{ width: 40 }} alt="css" />
							<img src={visual} style={{ width: 40 }} alt="visual" />
							<img src={bootstrap} style={{ width: 40 }} alt="bootstrap" />
							<img src={react} style={{ width: 40 }} alt="react" />
							<img src={vue} style={{ width: 40 }} alt="vue" />
						</div>
						<div className="container" id="techstack">
							<h2>Learning</h2>
							<img src={spain} style={{ width: 40 }} alt="spain " />
							<img src={typescript} style={{ width: 40 }} alt="typescript" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutme;
