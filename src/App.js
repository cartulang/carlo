import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <ProjectDetails
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          details={details}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects
              setDetails={setDetails}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
