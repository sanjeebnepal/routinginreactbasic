import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Videos from "./Videos";
import "./Router.css";

export default () => {
  return (
    <>
      <Router>
        <ul>
          {" "}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Videos">
            <Videos />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
