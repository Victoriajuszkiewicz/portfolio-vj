import React from "react";
import "./NavBar.css";
import moon from "../icons/moon.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { saveAs } from "file-saver";
import FileSaver from "file-saver";

const NavBar = (props) => {
	const { saveFile } = props;

	return (
		<div>
			<nav
				className="navbar fixed-top navbar-expand-lg  navbar-expand-md navbar-light "
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
							<a className="dropdown-item">Home</a>
						</li>

						<li>
							<Link
								className="dropdown-item"
								to="Aboutme"
								spy={true}
								smooth={true}
								// offset={50}
								duration={500}
							>
								About
							</Link>
						</li>

						<li>
							<Link
								className="dropdown-item"
								to="Projects"
								spy={true}
								smooth={true}
								// offset={50}
								duration={500}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								className="dropdown-item"
								to="Contact"
								spy={true}
								smooth={true}
								// offset={50}
								duration={500}
							>
								Contact
							</Link>
						</li>
						<div className="dropdown-divider"></div>
						<li>
							<a className="dropdown-item" onClick={saveFile}>
								CV
							</a>
						</li>
					</ul>
				</div>

				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<Link
							className="nav-item nav-link"
							id="navbuttons"
							to="Main"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							Home
						</Link>
						<Link
							className="nav-item nav-link"
							id="navbuttons"
							to="Aboutme"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							About
						</Link>
						<Link
							className="nav-item nav-link"
							id="navbuttons"
							to="Projects"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							Projects
						</Link>
						<Link
							className="nav-item nav-link"
							id="navbuttons"
							to="Contact"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							Contact
						</Link>
						<a
							className="nav-item nav-link "
							id="navbuttons"
							onClick={saveFile}
						>
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
