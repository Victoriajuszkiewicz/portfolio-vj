import React from "react";
import "./Projects.css";

import Card from "../components/CardProject.js";

const Projects = () => {
	return (
		<div id="Projects" className="Projectsmain">
			<div className="container" id="projectstext">
				<h2>Cool stuf I've built</h2>
				<p className="webdesigntext">
					Check out some of the websites I've crafted with love and attention to
					detail!
					<br />
					I've utilized various technologies like JavaScript, HTML, and CSS,
					along with frameworks and libraries such as React, Bootstrap, and MUI.
					<br />
					Let me put my skills to work and design a stunning website just for
					you!
				</p>
			</div>
			<Card></Card>
		</div>
	);
};

export default Projects;
