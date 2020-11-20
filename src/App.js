import React, { useState } from "react";
import "./App.css";
// screens
import About from "./components/About";
import Project from "./components/Project";
import Education from "./components/Education";
import Home from "./pages/Home";
// import SignInPage from "./pages/SignIn";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App(props) {
  // console.log(props);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/education" component={Education} />
        {/* <Route path="/signin" component={SignInPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
