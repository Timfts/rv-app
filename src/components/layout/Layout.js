import React from "react";
import Navigation from "./Navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import ModelR from "../../pages/ModelR";
import CommingSoon from "../../pages/ComingSoon";
import NotFound from "../../pages/404";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Layout = () => {
  return (
    <Router>
      <div className="layout">
        <Navigation />
        <RouteSwitch />
      </div>
    </Router>
  );
};

const RouteSwitch = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames={'my-node'} timeout={1000}>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/modelR" />} />
          <Route path="/modelR" component={ModelR} />
          <Route path="/modelIQ" component={CommingSoon} />
          <Route path="/modelMobi" component={CommingSoon} />
          <Route path="/modelCharlie" component={CommingSoon} />
          <Route path="/modelItaly" component={CommingSoon} />
          <Route component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default Layout;
