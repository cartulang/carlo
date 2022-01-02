import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./css/app.css";
//components
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

function App() {
	const [isOpen, setIsOpen] = useState("close");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [details, setDetails] = useState({});

	return (
		<Router>
			<div className="app">
				<Header isOpen={isOpen} setIsOpen={setIsOpen} />
				<ProjectDetails
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					details={details}
				/>
				<Routes>
					<Route exact path="/" element={<Home />} />

					<Route
						exact
						path="/projects"
						element={
							<Projects
								setDetails={setDetails}
								isModalOpen={isModalOpen}
								setIsModalOpen={setIsModalOpen}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
