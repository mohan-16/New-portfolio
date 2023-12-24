import React from "react";
import "./footer.css";
export default function FooterAll() {
  return (
    <div>
      <div
        className="copy d-flex align-items-center justify-content-around  flex-wrap"
        id="footer"
      >
        <div className="name">
          {" "}
          <h6> Mohanraj G </h6>
        </div>
        <p> Copyrights &copy;2023 YourName. All rights reserved. </p>
        <div className="gap-3 d-flex flex-row flex-between  fs-5 text-white">
          <a href="https://github.com/mohan-16">
            {" "}
            <i class="bi bi-github" href=""></i>
          </a>
          <a href="https://www.linkedin.com/in/mohanraj16/">
            <i class="bi bi-linkedin"></i>
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
