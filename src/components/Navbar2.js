import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import "../styles/NavBar2.css";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="navbarcont"
      >

        <ReactBootStrap.Navbar.Brand  href="#home" className="phoneLink">
          <FaPhone className="fa fa-phone" aria-hidden="true"></FaPhone> 0499
          388 227
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#features"className="aboutLink">
              About Me
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">
              Experience
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.NavDropdown
              title="Portfolio"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                This Site
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Menu AP
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Amazon clone
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#deets">
              Skills
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Mail Me
            </ReactBootStrap.Nav.Link>{" "}
            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Contact Me
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>

        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
