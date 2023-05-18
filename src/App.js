import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./components/NavBar.js";

function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<NavBar></NavBar>
				</header>
			</Router>
		</div>
	);
}

export default App;
