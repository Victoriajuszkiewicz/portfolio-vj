import React from "react";
import "./Reviews.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Pictures for cards
import Kelly from "../img/kelly.jpeg";
import Natalia from "../img/Natalia.jpeg";
import Michelle from "../img/Michelle.jpg";
import Sol from "../img/sol.jpeg";

const Reviews = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 900 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 900, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="Reviewsmain">
			<div className="container">
				<h2 className="titlereviews">What people say about working with me</h2>
			</div>
			<div className="container">
				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
					keyBoardControl={true}
				>
					<div id="cardreview">
						<div className="card" id="cardreview" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={Natalia}
								alt="Card  cap"
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
					<div>
						<div className="card h-100" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={Sol}
								alt="Card review cap"
								id="reviewimg"
							/>
							<div className="card-body">
								<h5 className="mb-3">Sol</h5>
								<h6 className="text-primary mb-3">
									Frontend developer | UX Content writer
								</h6>
								<i className="bi bi-star-fill"></i>
								<p className="px-xl-3">
									<i className="fas fa-quote-left pe-2"></i>"I had the
									opportunity to work with Victoria in the development of
									Foody's App. Victoria is a creative person and a fast learner
									who consistently brought fresh ideas to the team. She has an
									eye for design and is very attentive to detail which makes her
									deliver top-quality products. She has a great positive
									attitude and shinny energy, she has excellent communication
									skills, and is always available to help others. Overall, she
									is an exceptional professional who would be an invaluable
									asset to any team."
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="card h-100" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={Kelly}
								alt="Card  cap"
								id="reviewimg"
							/>
							<div className="card-body">
								<h5 className="mb-3">Kelly</h5>
								<h6 className="text-primary mb-3">Full-stack Developer</h6>
								<i className="bi bi-star-fill"></i>
								<p className="px-xl-3">
									<i className="fas fa-quote-left pe-2"></i>"I witness
									Victoria’s transformation into becoming a full stack
									developer. Always up to challenge the impossible, she has a
									powerful team spirit, sense of organisation and unlimited
									creativity. Without a doubt, Victoria will be an amazing
									addition to your team"
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="card h-100" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={Michelle}
								alt="Card  cap"
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
				</Carousel>
			</div>

			{/* <div className="container">
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
			</div> */}
		</div>
	);
};

export default Reviews;
