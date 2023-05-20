import React from "react";
import "./Main.css";
import Typed from "react-typed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Aboutme from "./Aboutme.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";
// import Footer from "./Footer.js";

const Main = () => {
	return (
		<div>
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
						<div className="row justify-content-md-center gap-1">
							<div className="col-12 col-lg-2 mb-4">
								<button type="button" className="btn" id="mainbuttons">
									My projects
								</button>
							</div>
							<div className="col-12 col-lg-2 mb-4">
								<button type="button" className="btn " id="mainbuttons">
									Download CV
								</button>
							</div>
							<div className="col-12 col-lg-2 mb-4">
								<button type="button" className="btn" id="contactmebtn">
									Contact me
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Aboutme />
			
		</div>
	);
};

export default Main;
