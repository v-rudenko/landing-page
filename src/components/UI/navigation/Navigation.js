import React from "react";
import Offcanvas from "./Offcanvas";
import logo from "./styles/images/bulka.png";
import classes from "./styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className={classes.logo_div}>
              <img
                className={classes.logo_img}
                src={logo}
                height="30px"
                width="30px"
                alt=""
              />
              <h3>Bulka Software</h3>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="#offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Offcanvas id='offcanvasNavbar'/>
          <div className="offcanvas navbar-offcanvas">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className={`nav-link active dropdown-toggle ${classes.nav_button}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Services
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-end ${classes.dropdown}`}
                >
                  <span>baboon</span>
                </div>
              </li>
              <li className="nav-item">
                <a className={`nav-link active ${classes.nav_button}`} href="#">
                  How do we work
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active ${classes.nav_button}`} href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active ${classes.nav_button}`} href="#">
                  Company
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
