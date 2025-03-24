import React, { Component } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <NavLink to="/" className="navbar-brand">
          ExcerTracker
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Exercises
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Create Exercise Log
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Create User
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
