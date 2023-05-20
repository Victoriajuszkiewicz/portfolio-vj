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
	return (
		<div>
			<div className="aboutmesection">
				<div className="container">
					<div className="row align-items-start" id="thewholerow">
						<div className="col" id="aboutmetext">
							<h2>About me</h2>
							<p>
								Front-End web developer with 5 years of social media manager
								experience. Combining my technical and social media skills to
								build tech solutions that have a real positive impact on the
								user.🐱‍💻
								<br />
								<br />
								Being a freelancer taught me to manage my workdays and
								prioritise my tasks to meet deadlines.Being on my own, I had to
								constantly learn and expand my knowledge in many different
								areas: content creation, influencer marketing, problem-solving,
								and client relations.With these skills, I created viral content
								that reached up to 1M views for my clients.
								<br />
								<br />
								The Social media manager role allowed me to travel and learn
								about different countries and cultures which transformed in a
								need of being part of a diverse team - with different
								perspectives and new approaches to create better solutions.My
								passion for learning and problem-solving has led me to
								transition into tech where I am constantly faced with new
								challenges and opportunities to grow my skill set.I am tech
								savvy, love using tech solutions for many day-to-day problems
								and would love to contribute to building such products that make
								people's day-to-day better.
							</p>
							<p>Check Me Out On </p>
							<img src={github} alt="this is github portfolio icon" />
							<img src={linkedin} alt="this is linkedin icon" />
							<img
								src={dribble}
								style={{ width: 40 }}
								alt="this is dribble potfolio icon"
							/>
						</div>

						<div className="col">
							<img
								src={profile}
								style={{ width: 500 }}
								alt="this is a profile picture of web developer Victoria"
							/>
						</div>
					</div>
					<div>
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
					<div>
						<h2>Learning</h2>
						<img src={spain} style={{ width: 40 }} alt="spain " />
						<img src={typescript} style={{ width: 40 }} alt="typescript" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutme;
