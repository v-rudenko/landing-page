import React from "react";
import classes from "./styles/Offcanvas.module.scss"

const Offcanvas = (props) => {
  return (
    <div
      id={props.id}
      className="offcanvas offcanvas-start w-100"
      tabIndex="-1"
      aria-label="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Bulka Software
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
    </div>
  );
};

export default Offcanvas;
