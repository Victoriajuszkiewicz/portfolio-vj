import React from "react";
import "./Contact.css";
import Typed from "react-typed";

const Contact = () => {
	return (
		<div id="Contact" className="contactmain">
			<div className="container" id="allcontact">
				<Typed
					className="questiontext"
					strings={["Do you have any questions?"]}
					typeSpeed={40}
					backSpeed={50}
					loop
				></Typed>
				<h3>Reach out!</h3>
				<p className="sendmedm">
					Send me a message on{" "}
					<a href="https://www.linkedin.com/in/victoria-juszkiewicz-webdev/">
						Linkedin{" "}
					</a>
					or you can email me at:{" "}
					<a href="mailto:victoria.fullstackdeveloper@gmail.com">
						victoria.fullstackdeveloper@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default Contact;
