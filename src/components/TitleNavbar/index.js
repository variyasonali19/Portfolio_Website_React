import React, { useState, useEffect } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  ProjectsH1,
  NavbarContainer,
  NavLogo,
  NavbarTitle,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./TitleNavbarElements";

const TitleNavBar = ({ title }) => {
  const backHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={backHome}>
            <ImHome />
          </NavLogo>
          <ProjectsH1>{title}</ProjectsH1>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default TitleNavBar;
