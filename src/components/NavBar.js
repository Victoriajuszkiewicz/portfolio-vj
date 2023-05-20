import React from "react";
import "./NavBar.css";
import moon from "../icons/moon.png";

const NavBar = () => {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg  navbar-expand-md navbar-light "
				id="topnav"
			>
				<div className="dropdown">
					<button
						className="btn dropdown-toggle d-lg-none d-md-none"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<li>
							<a className="dropdown-item" href="#">
								Home
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								About
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Projects
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Contact
							</a>
						</li>
						<div className="dropdown-divider"></div>
						<li>
							<a className="dropdown-item" href="#">
								CV
							</a>
						</li>
					</ul>
				</div>

				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<a className="nav-item nav-link active " id="navbuttons" href="#">
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
