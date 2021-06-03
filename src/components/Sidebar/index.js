import React from "react";
import { SidebarLinks } from "../InfoSection/Data";
import {
  CloseIcon,
  Icon, SidebarContainer,
  SidebarLink,
  SidebarMenu, SidebarWrapper
} from "./SidebarElement";
const Sidebar = ({ isOpen, toggleNavbar }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleNavbar}>
      <Icon>
        <CloseIcon onClick={toggleNavbar} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {SidebarLinks.map(SidebarLinks => (
            <SidebarLink to={SidebarLinks} onClick={toggleNavbar}>
              {SidebarLinks.toUpperCase()}
            </SidebarLink>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer >
  );
};

export default Sidebar;
