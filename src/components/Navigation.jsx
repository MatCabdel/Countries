import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {

  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>About</li>
          </NavLink>
          <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Blog</li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
  
}

export default Navigation;