import React from "react";
import dribble from "../icons/dribble.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import tiktok from "../icons/tiktok.png";

const Footer = () => {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");
	};

	return (
		<div>
			<footer className="text-center text-lg-start bg-light text-muted">
				<div className="container">
					<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
						<div className="me-5 d-none d-lg-block">
							<span>Get connected on socials:</span>
						</div>

						<div>
							<a href="" className="me-4 text-reset">
								<img
									src={linkedin}
									alt="linkedin icon click here"
									onClick={() =>
										openInNewTab(
											"https://www.linkedin.com/in/victoria-juszkiewicz-webdev/"
										)
									}
								/>
							</a>
							<a href="" className="me-4 text-reset">
								<img
									src={github}
									alt="github  account click here"
									onClick={() =>
										openInNewTab("https://github.com/Victoriajuszkiewicz")
									}
								/>
							</a>
							<a href="" className="me-4 text-reset">
								<img
									src={dribble}
									alt="github  account click here"
									style={{ width: 30 }}
									onClick={() =>
										openInNewTab("https://dribbble.com/victoria_juszkiewicz")
									}
								/>
							</a>
							<a href="" className="me-4 text-reset">
								<img
									src={tiktok}
									alt="tiktok  account click here"
									style={{ width: 30 }}
									onClick={() =>
										openInNewTab("https://www.tiktok.com/@girl_who_codes/")
									}
								/>
							</a>
						</div>
						<div className="text-center p-4">
							© 2023 Copyright:{" "}
							<a className="text-reset fw-bold">Victoria Juszkiewicz</a>
						</div>
					</section>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
