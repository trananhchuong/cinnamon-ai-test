import React from "react";
import PropTypes from "prop-types";
import { CheckedStyled } from "./CheckedStyled";

Checked.propTypes = {};

function Checked({ isChecked, handleOnclickImg }) {
  const getImg = () => {
    if (isChecked) return "/assets/checked.svg";
    return "/assets/unchecked.svg";
  };

  return (
    <CheckedStyled>
      {
        <img
          src={getImg(isChecked)}
          alt={`images banner`}
          onClick={handleOnclickImg && handleOnclickImg}
        />
      }
    </CheckedStyled>
  );
}

export default Checked;
