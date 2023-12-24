import React from "react";
import "./contact.css";

export default function ContactUs() {
  return (
    <div className="container-fluid contact-us p-5">
      <div className="container p-0">
        <div className="contact">
          <h6> Contact</h6>
          <h2></h2>

          <p>
            Don't be <span>shy!! </span>Hit me up!{" "}
            <i class="bi bi-arrow-down-circle-fill"></i>
          </p>
        </div>
        <div className="row contact-details d-flex align-items-center justify-contant-between gap-10">
          <div className="col-md-4">
            {" "}
            <i class="bi bi-geo-alt-fill"></i>
            <span>
              {" "}
              LOCATION <br />
              Chennai , Tamilnadu
            </span>
          </div>
          <div className="col-md-4">
            <i class="bi bi-envelope-at-fill"></i>
            <span>
              {" "}
              MAIL <br />
              {"      "} Mohanraj160203@gmail.com{" "}
            </span>
          </div>
          <div className="col-md-4">
            <i class="bi bi-instagram"></i>
            <span>
              {" "}
              INSTAGRAM <br />
              leo_maddy_16{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
