import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="nav-link">
            <h3>Vipin Cheriyanveetil</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  active">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item  active">
                <Link to={"/experience"} className="nav-link">
                  Experience
                </Link>
              </li>

              <li className="nav-item  active">
                <Link to={"/skills"} className="nav-link">
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
