import React from "react";
import "./Main.css";
import Typed from "react-typed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";
import FileSaver from "file-saver";

import Aboutme from "./Aboutme.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";
import Reviews from "./Reviews.js";
// import Footer from "./Footer.js";

const Main = (props) => {
	const { saveFile } = props;

	return (
		<div id="Main">
			<div className="mainhero">
				<div className="allinfo">
					<h1 className="intromain">Hi, I'm Victoria</h1>
					<div>
						<h2 className="secondmaintext">I'm a </h2>
						<Typed
							className="secondmaintext"
							strings={[
								"Front end developer",
								"Full stack developer",
								"Web designer",
								"React developer",
							]}
							typeSpeed={40}
							backSpeed={50}
							loop
						></Typed>
					</div>
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col-12 col-lg-2 mb-4">
								<Link
									to="Projects"
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
								>
									<button type="button" className="btn" id="mainbuttons">
										My projects
									</button>
								</Link>
							</div>
							<div className="col-12 col-lg-2 mb-4">
								<button
									type="button"
									className="btn "
									id="mainbuttons"
									onClick={saveFile}
								>
									Download CV
								</button>
							</div>
							<div className="col-12 col-lg-2 mb-4">
								<Link
									to="Contact"
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
								>
									<button type="button" className="btn" id="contactmebtn">
										Contact me
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content-wrapper">
				<Aboutme />
				<Projects />
				<Reviews />
				<Contact />
			</div>
		</div>
	);
};

export default Main;
