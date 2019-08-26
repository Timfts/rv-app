import React from "react";
import Navigation from "./Navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import ModelR from "../../pages/ModelR";
import CommingSoon from "../../pages/ComingSoon";
import NotFound from "../../pages/404";

const Layout = () => {
  return (
    <Router>
      <div className="layout">
        <Navigation />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/modelR" />} />
          <Route path="/modelR" component={ModelR} />
          <Route path="/modelIQ" component={CommingSoon} />
          <Route path="/modelMobi" component={CommingSoon} />
          <Route path="/modelCharlie" component={CommingSoon} />
          <Route path="/modelItaly" component={CommingSoon} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
