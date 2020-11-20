import React from "react";
import { Route, Switch } from "react-router-dom";
// components
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Education from "../../pages/Education/Education";
import FooterSection from "../../components/FooterSection";
import "./Main.scss";
export default function Main() {
  return (
    <main className="mainContainer">
      {/* can write header here and then screen in which you want to switch */}
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/education" component={Education} />
        <Route path="/about" component={About} />
        <Route path="/footer" component={FooterSection} />
      </Switch>
    </main>
  );
}
