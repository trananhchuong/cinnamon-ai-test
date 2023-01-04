import React from "react";
import { NavbarSelectedStyled } from "./NavbarSelectedStyled";
import { FaRegTimesCircle } from "react-icons/fa";

NavbarSelected.propTypes = {};

function NavbarSelected({ count, removeUsersIsChecked }) {
  return (
    <NavbarSelectedStyled>
      <div className="selected__box">
        {count} selected{" "}
        <FaRegTimesCircle
          className="icon-remove"
          onClick={() => {
            removeUsersIsChecked && removeUsersIsChecked();
          }}
        />
      </div>

      <div className="action__box">
        <span>Delete</span>
        <div className="seperate" />
        <span>Download</span>
      </div>
    </NavbarSelectedStyled>
  );
}

export default NavbarSelected;
