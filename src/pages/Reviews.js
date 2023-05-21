import React from "react";
import "./Reviews.css";

// Pictures for cards
import kelly from "../img/kelly.jpeg";
import Natalia from "../img/Natalia.jpeg";
import Michelle from "../img/Michelle.jpg";

const Reviews = () => {
	return (
		<div className="Reviewsmain">
			<div className="container">
				<h2 className="titlereviews">What people say about working with me</h2>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<div className="card" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={Natalia}
								alt="Card image cap"
								id="reviewimg"
							/>
							<div className="card-body">
								<h5 className="mb-3">Natalia</h5>
								<h6 className="text-primary mb-3">E-commerce & CRO Manager</h6>
								<i className="bi bi-star-fill"></i>
								<p className="px-xl-3">
									<i className="fas fa-quote-left pe-2"></i>"I had the pleasure
									to work with Victoria for over a year. She is a very organised
									person, easy to work with and contributes to the projects in a
									very unique way.
									<br />
									She is a team player, has attention to detail and
									unquestionable work ethic. <br />
									Victoria would be a great addition to any team
									looking for talent."
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="card h-100" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={Michelle}
								alt="Card image cap"
								id="reviewimg"
							/>
							<div className="card-body">
								<h5 className="mb-3">Michelle</h5>
								<h6 className="text-primary mb-3">CEO</h6>
								<i className="bi bi-star-fill"></i>
								<p className="px-xl-3">
									<i className="fas fa-quote-left pe-2"></i>"My E-commerce brand
									has worked with Victoria for over a year now and I can
									honestly say she has been the best addition to my team so far.
									<br />
									She works to her own initiative and needs little or not
									direction as she is super creative.
									<br />I would highly recommend Victoria."
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="card" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={Natalia}
								alt="Card image cap"
								id="reviewimg"
							/>
							<div className="card-body">
								<h5 className="mb-3">Natalia</h5>
								<h6 className="text-primary mb-3">E-commerce & CRO Manager</h6>
								<i className="bi bi-star-fill"></i>
								<p className="px-xl-3">
									<i className="fas fa-quote-left pe-2"></i>"I had the pleasure
									to work with Victoria for over a year. She is a very organised
									person, easy to work with and contributes to the projects in a
									very unique way.
									<br />
									She is a team player, has attention to detail and
									unquestionable work ethic. <br />
									Victoria would be a great addition to any team
									looking for talent."
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="card" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={Natalia}
								alt="Card image cap"
								id="reviewimg"
							/>
							<div className="card-body">
								<h5 className="mb-3">Natalia</h5>
								<h6 className="text-primary mb-3">E-commerce & CRO Manager</h6>
								<i className="bi bi-star-fill"></i>
								<p className="px-xl-3">
									<i className="fas fa-quote-left pe-2"></i>"I had the pleasure
									to work with Victoria for over a year. She is a very organised
									person, easy to work with and contributes to the projects in a
									very unique way.
									<br />
									She is a team player, has attention to detail and
									unquestionable work ethic. <br />
									Victoria would be a great addition to any team
									looking for talent."
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
