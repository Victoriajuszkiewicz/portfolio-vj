import React from "react";
import "./Projects.css";

import foody from "../img/foody.png";
import cinemaholics from "../img/cinemaholics2.png";
import bookish from "../img/bookish.png";
import weather from "../img/weather.png";
import petapp from "../img/petapp.png";
import wellness from "../img/wellness.png";
import hairdresser from "../img/hair.png";

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
			<div className="container">
				<div className="row justify-content-center gy-3">
					<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
						<div className="card" style={{ width: "30rem" }}>
							<img className="card-img-top" src={foody} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Recipe app- FOODY</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/FOODY-app-Spoonacular-API-"
									target="_blank"
									className="btn btn-primary"
									id="codebtn"
								>
									View code
								</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
						<div className="card h-100" style={{ width: "30rem" }}>
							<img
								className="card-img-top"
								src={weather}
								style={{ height: 200 }}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Weather App</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/weather-app-Openweather-API-"
									target="_blank"
									className="btn btn-primary"
									id="codebtn"
								>
									View code
								</a>
								<a
									href="https://main--weather-app-victoria.netlify.app/"
									target="_blank"
									className="btn btn-primary"
									id="demobtn"
								>
									View live
								</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
						<div className="card h-100" style={{ width: "30rem" }}>
							<img
								className="card-img-top"
								src={cinemaholics}
								style={{ height: 200 }}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Netflix clone</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/Cinemaholics-TMDB-API-"
									target="_blank"
									className="btn btn-primary"
									id="codebtn"
								>
									View code
								</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
						<div className="card h-100" style={{ width: "30rem" }}>
							<img
								className="card-img-top"
								src={bookish}
								style={{ height: 200 }}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Book store</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/shopping-cart-js"
									target="_blank"
									className="btn btn-primary"
									id="codebtn"
								>
									View code
								</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
						<div className="card h-100" style={{ width: "30rem" }}>
							<img
								className="card-img-top"
								src={petapp}
								style={{ height: 200 }}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Petapp</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/Petapp-Petfinder-API"
									target="_blank"
									className="btn btn-primary"
									id="codebtn"
								>
									View code
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container" id="webdesigndiv">
				<h2 className="webdesigntext">Web design</h2>
				<div className="container">
					<div className="row justify-content-center gy-3">
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
							<div className="card" style={{ width: "30rem" }}>
								<img
									className="card-img-top"
									src={wellness}
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">Wellness coach </h5>
									<a
										href="https://dribbble.com/shots/21444055-Wellness-coach-website-design"
										target="_blank"
										className="btn btn-primary"
										id="codebtn"
									>
										View design
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
							<div className="card h-100" style={{ width: "30rem" }}>
								<img
									className="card-img-top"
									src={hairdresser}
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">Hairdresser page</h5>
									<a
										href="https://dribbble.com/shots/21465230-Hair-salon-hairdresser-website"
										target="_blank"
										className="btn btn-primary"
										id="codebtn"
									>
										View design
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
