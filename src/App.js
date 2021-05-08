import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./css/app.css";
//components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [isOpen, setIsOpen] = useState("close");

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
