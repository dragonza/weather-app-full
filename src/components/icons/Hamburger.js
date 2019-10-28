import React from "react";
import PropTypes from "prop-types";

function Hamburger({ fill = "#594e78", theme, onMenuClick }) {
  return (
    <svg
      onClick={onMenuClick}
      id="Menu_Burger_Icon"
      data-name="Menu Burger Icon"
      viewBox="31.5 30 49.9 32"
      fill={theme === "dark" ? "#fff" : fill}
    >
      <rect
        id="Rectangle_9"
        width="49.9"
        height="4"
        className="hamburger__icon__fill"
        data-name="Rectangle 9"
        rx="2"
        transform="translate(31.5 58)"
      />
      <rect
        id="Rectangle_10"
        width="49.9"
        height="4"
        className="hamburger__icon__fill"
        data-name="Rectangle 10"
        rx="2"
        transform="translate(31.5 44)"
      />
      <rect
        id="Rectangle_11"
        width="49.9"
        height="4"
        className="hamburger__icon__fill"
        data-name="Rectangle 11"
        rx="2"
        transform="translate(31.5 30)"
      />
    </svg>
  );
}

Hamburger.propTypes = {};

export default Hamburger;
