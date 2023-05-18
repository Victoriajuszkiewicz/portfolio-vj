import React from "react";
import "./NavBar.css";
import moon from "../icons/moon.png";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-light " id="topnav">
				{/* <button
					className="navbar-toggler d-block d-sm-none"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button> */}
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<a className="nav-item nav-link active" id="navbuttons" href="#">
							Home <span className="sr-only"></span>
						</a>
						<a className="nav-item nav-link" id="navbuttons" href="#">
							About
						</a>
						<a className="nav-item nav-link" id="navbuttons" href="#">
							Projects
						</a>
						<a className="nav-item nav-link " id="navbuttons" href="#">
							Contact
						</a>
						<a className="nav-item nav-link " id="navbuttons" href="#">
							CV
						</a>

						<a className="nav-item nav-link " href="#">
							<img src={moon} alt="icon of a moon" style={{ width: 30 }} />
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
