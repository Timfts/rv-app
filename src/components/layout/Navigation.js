import React from "react";
import logo from "../../images/logo.svg";
import { NavLink, Link } from "react-router-dom";

const NavigationLink = ({ to, label }) => (
  <NavLink
    className="navigation__nav-link"
    activeClassName="navigation__nav-link--active"
    to={to}
  >
    {label}
  </NavLink>
);

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="navigation__brand-container">
        <img className="navigation__brand" src={logo} alt="Red Ventures" />
      </Link>
      <nav className="navigation__nav">
        <NavigationLink to="/modelR" label="Model R" />
        <NavigationLink to="/modelIQ" label="Model IQ" />
        <NavigationLink to="/modelMobi" label="Model Mobi" />
        <NavigationLink to="/modelCharlie" label="Model Charlie" />
        <NavigationLink to="/modelItaly" label="Model Italy" />
      </nav>
    </div>
  );
};

export default Navigation;
