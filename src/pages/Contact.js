import React from "react";
import "./Contact.css";
import TypeIt from "typeit-react";

const Contact = () => {
	return (
		<div id="Contact" className="contactmain">
			<div className="container" id="allcontact">
				<TypeIt
					className="questiontext"
					options={{
						loop: true,
						waitUntilVisible: true,
					}}
					getBeforeInit={(instance) => {
						instance.type("Do you have any questions?").pause(1000).delete();

						return instance;
					}}
				/>
				{/* <Typed
					className="questiontext"
					strings={["Do you have any questions?"]}
					typeSpeed={40}
					backSpeed={50}
					loop
				></Typed> */}
				<h3>Reach out!</h3>
				<p className="sendmedm">
					Send me a message on{" "}
					<a href="https://www.linkedin.com/in/victoria-juszkiewicz-webdev/">
						Linkedin{" "}
					</a>
					or you can email me at:{" "}
					<a href="mailto:victoria.webdev9@gmail.com">
					victoria.webdev9@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default Contact;
