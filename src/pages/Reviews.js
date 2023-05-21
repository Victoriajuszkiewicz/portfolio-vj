import React from "react";
import "./Reviews.css";
import kelly from "../img/kelly.jpeg";

const Reviews = () => {
	return (
		<div>
			<div className="container">
				<h2>What people say about working with me</h2>
			</div>
			<div className="container">
				<div className="card" style={{ width: "15rem" }}>
					<img
						className="card-img-top"
						src={kelly}
						alt="Card image cap"
						id="reviewimg"
					/>
					<div className="card-body">
						<h5 className="mb-3">Kelly</h5>
						<h6 className="text-primary mb-3">Web Developer</h6>
						<i className="bi bi-star-fill"></i>
						<p className="px-xl-3">
							<i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Quod eos id officiis hic
							tenetur quae quaerat ad velit ab hic tenetur.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
