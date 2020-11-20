import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";
export class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Navbar bg="dark" expand="lg" fixed="top" className="mainNavbar">
        <img
          src={require("../../Images/portLogo.png")}
          width="70px"
          height="60px"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="links" smooth={true} to="home">
              Home
            </Link>
            <Link className="links" smooth={true} to="about">
              Projects
            </Link>
            <Link className="links" smooth={true} to="about">
              About
            </Link>
            <Link className="links" smooth={true} to="education">
              Education{" "}
            </Link>
            <Link className="links" smooth={true} to="contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
