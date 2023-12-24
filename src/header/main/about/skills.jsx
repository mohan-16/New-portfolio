import React from "react";
import { FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function SkillSet() {
  return (
    <div
      className="tech  mt-4"
      style={{
        display: "flex",
        width: "100",
        alignItems: "flex-start",
      }}
    >
      {" "}
      <h5 style={{ fontSize: "15px", fontWeight: "650" }}>
        Technology Expertise
      </h5>
      <div
        className=""
        style={{
          color: "#023020",
          padding: "0px 0px 0px 20px",
          display: "flex",
          width: "150px ",
          justifyContent: "space-between",
          fontSize: " 18px",
        }}
      >
        {" "}
        <FaReact /> <FaHtml5 />
        <FaCss3 />
        <FaBootstrap />
        <IoLogoJavascript />
      </div>
    </div>
  );
}
