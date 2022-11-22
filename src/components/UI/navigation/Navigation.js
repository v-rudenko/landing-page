import React from "react";
import logo from "./styles/images/bulka.png";
import classes from "./styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
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
        </div>
      </nav>
    </>
  );
};

export default Navigation;
