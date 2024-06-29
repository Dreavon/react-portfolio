import { Outlet } from "react-router-dom";

import "./Navbar.css";
import logoImage from "../img/react_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faLaptopCode,
  faBriefcase,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <img src={logoImage} width={50} alt="" />
          </a>
          <span>
            <h3 className="text-light">Portfolio</h3>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ms-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <FontAwesomeIcon className="me-1" icon={faHome} />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/About" className="nav-link">
                  <FontAwesomeIcon className="me-1" icon={faUser} />
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/Portfolio" className="nav-link">
                  <FontAwesomeIcon className="me-1" icon={faLaptopCode} />
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="/Experience" className="nav-link">
                  <FontAwesomeIcon className="me-1" icon={faBriefcase} />
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a href="/Contact" className="nav-link">
                  <FontAwesomeIcon className="me-1" icon={faPhone} />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
