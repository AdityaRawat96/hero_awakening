import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Profile from "./components/profiles";

export default class App extends React.Component {
  render() {
    return (
      <div>
      <div className="content">
      <div className="content-section content-top"></div>
      <div className="content-middle">
      <div className="content-section content-left"></div>
      <Router>
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Redirect from="" to="/home" />
      </Switch>
      </Router>
      <div className="content-section content-right"></div>
      </div>
      <div className="content-section content-bottom"></div>
      </div>
      </div>
    );
  }
}
