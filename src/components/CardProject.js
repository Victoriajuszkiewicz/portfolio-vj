import React from "react";

import foody from "../img/foody.png";
import cinemaholics from "../img/cinemaholics2.png";
import bookish from "../img/bookish.png";
import weather from "../img/weather.png";
import petapp from "../img/petapp.png";
import wellness from "../img/wellness.png";
import hairdresser from "../img/hair.png";

const CardProject = () => {
	return (
		<div>
			<div className="container">
				<div
					className="row justify-content-center gy-3"
					id="maincontainerprokects"
				>
					<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
						<div className="card" style={{ width: "30rem" }}>
							<img className="card-img-top" src={foody} alt="Card cap" />
							<div className="card-body">
								<h5 className="card-title">Recipe app- FOODY</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/FOODY-app-Spoonacular-API-"
									target="_blank"
									rel="noreferrer"
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
								alt="Card cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Weather App</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/weather-app-Openweather-API-"
									target="_blank"
									rel="noreferrer"
									className="btn btn-primary"
									id="codebtn"
								>
									View code
								</a>
								<a
									href="https://main--weather-app-victoria.netlify.app/"
									target="_blank"
									rel="noreferrer"
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
								alt="Card  cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Netflix clone</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/Cinemaholics-TMDB-API-"
									target="_blank"
									rel="noreferrer"
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
								alt="Card project by victoria juszkiewicz cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Book store</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/shopping-cart-js"
									target="_blank"
									rel="noreferrer"
									className="btn btn-primary"
									id="codebtn"
								>
									View code
								</a>
								<a
									href="https://main--bookish-shop.netlify.app/"
									target="_blank"
									rel="noreferrer"
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
								src={petapp}
								style={{ height: 200 }}
								alt="Card project by victoria juszkiewicz cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Petapp</h5>
								<a
									href="https://github.com/Victoriajuszkiewicz/Petapp-Petfinder-API"
									target="_blank"
									rel="noreferrer"
									className="btn btn-primary"
									id="codebtn"
								>
									View code
								</a>
								<a
									href="https://main--pet-app-project.netlify.app//"
									target="_blank"
									rel="noreferrer"
									className="btn btn-primary"
									id="demobtn"
								>
									View live
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container" id="webdesigndiv">
				<h2 className="webdesigntext">Web design</h2>
				<div className="container">
					<div
						className="row justify-content-center gy-3"
						id="maincontainerprokects"
					>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
							<div className="card" style={{ width: "30rem" }}>
								<img
									className="card-img-top"
									src={wellness}
									alt="Card project by victoria juszkiewicz cap"
								/>
								<div className="card-body">
									<h5 className="card-title">Wellness coach </h5>
									<a
										href="https://dribbble.com/shots/21444055-Wellness-coach-website-design"
										target="_blank"
										rel="noreferrer"
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
									alt="Card project by victoria juszkiewicz cap"
								/>
								<div className="card-body">
									<h5 className="card-title">Hairdresser page</h5>
									<a
										href="https://dribbble.com/shots/21465230-Hair-salon-hairdresser-website"
										target="_blank"
										rel="noreferrer"
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

export default CardProject;
