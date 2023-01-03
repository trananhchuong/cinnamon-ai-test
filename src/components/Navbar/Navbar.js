import React, { useState } from "react";

import { Nav, NavbarContainer, NavLogo, NavMenu } from "./NavbarStyles.js";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">
          <img src="/assets/logo_CinnamonAI.png" alt={`images banner`} />
        </NavLogo>
        <NavMenu />
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
