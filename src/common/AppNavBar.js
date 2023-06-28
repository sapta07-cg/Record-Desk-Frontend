import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AppNavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Record Desk
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-item"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/employee"
                className="nav-item"
                activeClassName="active"
              >
                Employee
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AppNavBar;
