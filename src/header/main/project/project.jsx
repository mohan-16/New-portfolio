import React from "react";
import Button from "react-bootstrap/Button";
import "./project.css";

export default function Projects({ image, title, des, lang, code, prev }) {
  return (
    <div className="project">
      <div className="row project-row ">
        <div className="col-md-7 project-img">
          <img src={image}></img>
        </div>
        <div className="col-md-4 project-des">
          <>
            <h1 className=" text-uppercase">{title}</h1>
            <line></line>
          </>
          <>
            <p>{des}</p>
          </>
          <>
            <p className="w-50 bg-light p-1 " style={{ fontWeight: "900" }}>
              {lang}
            </p>
          </>
          <div className="d-flex gap-3">
            <a href={code} target="_blank">
              {" "}
              <Button variant="primary">Code</Button>
            </a>
            <a href={prev} target="_blank">
              <Button variant="primary">Preview</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
