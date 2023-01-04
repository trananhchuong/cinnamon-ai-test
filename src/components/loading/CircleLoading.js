import React from "react";
import PropTypes from "prop-types";
import { CircleLoadingWrapper } from "./CircleLoadingStyled";

CircleLoading.propTypes = {};

function CircleLoading({ color, className = "circle-loading" }) {
  return (
    <CircleLoadingWrapper color={color}>
      <div className={className} />
    </CircleLoadingWrapper>
  );
}

export default CircleLoading;
