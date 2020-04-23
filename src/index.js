import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Portfolio from "./components/portfolio";
import Experience from "./components/experience";
import Notfound from "./components/notfound";
import Header from "./components/header";
import Footer from "./components/footer";
import Skills from "./components/skills";
const routing = (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/experience" component={Experience} />
      <Route component={Notfound} />
    </Switch>
    <Footer />
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
