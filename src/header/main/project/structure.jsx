import React from "react";
import evoke from "../cluth.jpg";
import Projects from "./project";
import "./project.css";

export default function () {
  return (
    <div
      className="container-fluid work"
      id="proj"
      style={{ backgroundColor: " #f5f5dc" }}
    >
      <span> Show Case</span>
      <Projects
        image={evoke}
        title={"E-Commerce"}
        lang={"HTML | CSS"}
        des={
          "Crafted a chic dress store website using HTML and CSS for a stylish and user-friendly online shopping experience. seamlessly blending elegant aesthetics with intuitive user experience for a delightful online shopping journey."
        }
        code={"https://github.com/mohan-16/e---commerce"}
        prev={"https://e-commerce-rqb8.vercel.app/"}
      />
    </div>
  );
}
