import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar" data-testid="navbar">
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/movies" activeClassName="active">Movies</NavLink>
      <NavLink to="/directors" activeClassName="active">Directors</NavLink>
      <NavLink to="/actors" activeClassName="active">Actors</NavLink>
    </nav>
  );
}

export default NavBar;
