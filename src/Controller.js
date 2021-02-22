import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

export default function controller() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          <Route />
        </Switch>
      </Dashboard>
    </Router>
  );
}
