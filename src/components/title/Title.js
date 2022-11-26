import React from "react";
import ContactForm from "../contact/ContactForm";
import classes from "./styles/Title.module.scss";

const Title = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-6">
          <h1 className={classes.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        </div>
        <div className="col-md-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Title;
