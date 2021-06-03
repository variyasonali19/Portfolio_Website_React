import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// screens
import About from "./components/About";
import Education from "./components/Education";
import professionalExperience from './components/professionalExperience/professionalExperience';
import Home from "./pages/Home";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/professionalexperience" component={professionalExperience} />
        <Route path="/education" component={Education} />
      </Switch>
    </Router>
  );
}

export default App;
