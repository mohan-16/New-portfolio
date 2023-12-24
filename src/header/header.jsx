import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function HeaderTop() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary "
      style={{ boxShadow: " 0px 0px 8px rgba(0, 0, 0, 0.6)" }}
    >
      <Navbar.Brand href="#home">
        <h4
          style={{
            fontWeight: "700",
            color: "black",
            fontSize: "18px",
            padding: "8px",
          }}
        >
          Mohanraj G
        </h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ms-auto p-2 gap-5 "
          style={{
            fontWeight: "650",
            color: "black",
            fontSize: "14px",
          }}
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#proj"> Project</Nav.Link>
          <Nav.Link href="#footer">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
