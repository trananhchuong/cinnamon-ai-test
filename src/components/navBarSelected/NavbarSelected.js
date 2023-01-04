import React from "react";
import PropTypes from "prop-types";
import { NavbarSelectedStyled } from "./NavbarSelectedStyled";

NavbarSelected.propTypes = {};

function NavbarSelected({ count }) {
  return (
    <NavbarSelectedStyled>
      <div className="selected__box">{count} selected</div>

      <div className="action__box">
        <span>Delete</span>
        <div className="seperate" />
        <span>Download</span>
      </div>
    </NavbarSelectedStyled>
  );
}

export default NavbarSelected;
