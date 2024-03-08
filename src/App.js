import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
// Pages & components
import NavBar from "./components/NavBar.js";
import Aboutme from "./pages/Aboutme.js";
import Contact from "./pages/Contact.js";
import Main from "./pages/Main.js";
import Projects from "./pages/Projects.js";

import FileSaver from "file-saver";

export const ThemeContext = createContext(null);

function App() {
	const [theme, setTheme] = useState("light");

	function saveFile() {
		FileSaver.saveAs(
			process.env.PUBLIC_URL + "/resources/CV-Front-end-dev-Victoria.pdf",
			"Front end developer Victoria CV.pdf"
		);
	}

	const toggleTheme = () => {
		setTheme((curr) => (curr === "light" ? "dark" : "light"));
		console.log("Toggle clicked");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className="App" id={theme}>
				<Router>
					<header>
						<NavBar
							saveFile={saveFile}
							toggleTheme={toggleTheme}
							theme={theme}
						></NavBar>
					</header>
					<Routes>
						<Route path="/" element={<Main saveFile={saveFile} />}></Route>
						<Route path="/aboutme" element={<Aboutme />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="/projects" element={<Projects />}></Route>
					</Routes>
				</Router>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
