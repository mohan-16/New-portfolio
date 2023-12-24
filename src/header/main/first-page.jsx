import React from "react";
import "./first-page.css";
import Mohan from "./MOHAN RAJ G.jpg";
import SkillSet from "./about/skills";
export default function FirstPage() {
  return (
    <>
      <div
        className="container-fluid home h-100 p-0 "
        style={{ width: "100%" }}
      >
        <div className="container p-0 pe-4">
          {" "}
          <div className="row" style={{ height: "90vh" }}>
            <div className=" home-img col-md-6 order-md-2 d-flex flex-column justify-content-around align-items-center">
              <img src={Mohan} alt="" className="portfolio-img p-0 " />
            </div>
            <div className=" home-content col-md-6 order-md-1  d-flex flex-column justify-content-center ">
              <h1 className=" d-grid home-title grid-start m-2">
                I'm React <span> DEVELOPER</span>
              </h1>
              <p className=" home-con m-2">
                A "Front-End Developer" specializes in user-friendly and
                visually interfaces on the web.
              </p>
              <div className="main-icons ">
                <a href="https://github.com/mohan-16" target="_black">
                  <i className="bi bi-github  Github "></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohanraj16/"
                  target="_black"
                >
                  <i className="bi bi-linkedin Github"></i>
                </a>

                <SkillSet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
