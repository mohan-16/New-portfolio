import React from "react";
import mohan from "../MOHAN RAJ G.jpg";
import "./index.css";
export default function AboutMe() {
  return (
    <div className="container-fluid  about pb-5 pt-5" id="about">
      <div className="container About-con p-5 rounded-4 ">
        <div className="row About-main  ">
          <div className="mohan-img col-md-5 d-flex justify-content-center align-items-center ">
            <img src={mohan} alt="" height={"270px"} width={"260px"} />
          </div>
          <div className="About-Us  col-md-7 d-flex flex-column justify-content-center ">
            <h3 className="mb-3 mt-5">About us</h3>
            <h6> A Dedicate Front-end React Dev</h6>

            <line></line>
            <p className="my-3">
              {" "}
              A Junior Front-End Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, React, and Booststrap. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. Let's build something incredible together !!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
