import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  z-index: ${({ isOpen }) => (isOpen ? "999" : "-999")};
  opacity: ${({ isOpen }) => (isOpen ? "98%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? 0 : "-12rem")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  background: transparent;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  // background: yellow;
  // padding: 90px;
  // align-items: center;
  justify-content: center;
  display: grid;
  // display: flex;
`;
export const SidebarMenu = styled.ul`
  // background: red;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;
  @media screen and (max-width: 768px) {
    grid-tempate-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  // background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  // padding: 2rem;
  &:hover {
    text-decoration: none;
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  // background: green;
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: #010606;
    background: #fff;
    transition: all 0.2s ease-in-out;
  }
`;
