import React from "react";
import "./Projects.css";

import Card from "../components/CardProject.js";

const Projects = () => {
	return (
		<div id="Projects" className="Projectsmain">
			<div className="container" id="projectstext">
				<h2>Cool stuf I've built</h2>
				<p className="webdesigntext">
					Here's a glimpse of some of the websites I've created with passion and
					precision.
					<br />
					I have used a variety of technologies to build these websites
					including JavaScript, HTML and CSS.
					<br />
					I have also used a variety of frameworks and libraries including
					React, Bootstrap and MUI.
					<br />
					Allow me to weave my magic and create a digital masterpiece for you.
				</p>
			</div>
			<Card></Card>
		</div>
	);
};

export default Projects;
