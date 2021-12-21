import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, showNavMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {showNavMenu && (
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              Om oss
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Våre tilbud
            </SidebarLink>
            <SidebarLink to="booking" onClick={toggle}>
              Leie lokale?
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Kontakt oss
            </SidebarLink>
          </SidebarMenu>
        )}
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
