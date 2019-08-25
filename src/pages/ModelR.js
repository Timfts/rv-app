import React from "react";
import CarBuilder from "../components/CarBuilder";
import { Switch, Route } from "react-router-dom";

const CarPresentation = () => {
  return <p>car presentation</p>;
};

const ModelR = () => {
  return (
    <Switch>
      <Route exact path="/modelR" component={CarPresentation} />
      <Route path="/modelR/builder" render={() => <CarBuilder carModel="modelR" />} />
    </Switch>
  );
};

export default ModelR;
