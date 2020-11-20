import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  //   background:${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")}}
  height: 70px;
  // margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  //   justify-content: flex-start;
  align-items: center;
  //   height: 70px;
  z-index: 1;
  width: 100%;
  //   padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  // background-color: purple;
  color: #01bf71;
  //   justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //   margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  //   pointer-events: none; /**<----------added to remove hover effect-*/
  //   border: 0px solid yellow;
  @media screen and (max-width: 1032px) {
    padding-left: 20px;
  }
  &:hover {
    text-decoration: none;
    color: rgba(1, 191, 113, 0.8);
  }
`;
export const NavbarTitle = styled.div`
  font-size: 14px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2rem;
  color: rgb(1, 191, 113);
  font-weight: bold;
  padding: 0 50px;
  margin-top: 8px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const NavMenu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  // background: red;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  //   height: 100%;
  //   border: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  &.active {
    border-botton: 3px solid #01bf71;
    // text-decoration: none;
    // border-botton: 3px solid #01bf71;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-botton: 3px solid #01bf71;
    // text-decoration: none;
    // border-botton: 3px solid #01bf71;
  }
  &:hover {
    text-decoration: none;
    color: #01bf71;
    border-botton: 3px solid #01bf71;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  color: red;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  //   border: 0px solid yellow;
  // &:hover {
  //   text-decoration: none;
  //   border: 0px solid yellow;
  //   transition: all 0.2s ease-in-out;
  //   // background: #fff;
  //   color: #010606;
  // }
  &:hover {
    text-decoration: none;
    background-color: #fff;
    color: #000;
  }
  &:active {
    // background: yellow;
    text-decoration: none;
    border-botton: 3px solid #01bf71;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
