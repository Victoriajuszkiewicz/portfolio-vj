import React from "react";
import "./Main.css";

const Main = () => {
	return (
		<div>
			<div className="mainhero">
				<h1 className="intromain">Hi, I'm Victoria</h1>
				<div>
					<h2 className="secondmaintext">I'm a</h2>{" "}
					<h2 className="secondmaintext">Front-end developer</h2>
				</div>
			</div>
			<div className="grouppbutton">
				<button type="button" className="btn btn-success">
					Success
				</button>
				<button type="button" className="btn btn-success">
					Success
				</button>
				<button type="button" className="btn btn-success">
					Success
				</button>
			</div>
		</div>
	);
};

export default Main;
