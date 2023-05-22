import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div id="Contact" className="contactmain">
			<div className="container">
				<h2>Do you have any questions?</h2>
				<h3>Reach out!</h3>
				<p>
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
