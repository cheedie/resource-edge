import React from "react";
import heroImg from "../assets/hero-img.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="section-center hero-center">
        <div className="hero-text">
          <h1 className="title">
            Throw paperwork into the trash where it belongs.
          </h1>
          <p className="paragraph-text">
            Eliminate all the hassle involved in managing people operations by
            automating it.
          </p>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
