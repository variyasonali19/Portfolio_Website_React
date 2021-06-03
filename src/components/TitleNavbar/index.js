import React from "react";
import { ImHome } from "react-icons/im";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo, ProjectsH1
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
