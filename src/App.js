import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// Pages & components
import NavBar from "./components/NavBar.js";
import Aboutme from "./pages/Aboutme.js";
import Contact from "./pages/Contact.js";
import Main from "./pages/Main.js";
import Projects from "./pages/Projects.js";
import Footer from "./components/Footer.js";

function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<NavBar></NavBar>
				</header>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/aboutme" element={<Aboutme />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
