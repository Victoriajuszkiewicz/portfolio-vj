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

import FileSaver from "file-saver";
function App() {
	function saveFile() {
		FileSaver.saveAs(
			process.env.PUBLIC_URL + "/resources/CV-Victoria-Juszkiewicz.pdf",
			"Front end developer Victoria CV.pdf"
		);
	}
	return (
		<div className="App">
			<Router>
				<header>
					<NavBar saveFile={saveFile}></NavBar>
				</header>
				<Routes>
					<Route path="/" element={<Main saveFile={saveFile} />}></Route>
					<Route path="/aboutme" element={<Aboutme />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
