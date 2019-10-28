import React from 'react';
import PropTypes from 'prop-types';
import "./BackArrow.scss"

function BackArrow(props) {
  return (
    <svg className="back__button" viewBox="4085 152 98.5 126" fill="black">
      <g transform="translate(3980)">
        <circle className="a1" cx="39" cy="39" r="39" transform="translate(105 152)"/>
        <line className="b1" x1="80" transform="translate(123.5 190.5)"/>
        <line className="b1" y1="26" x2="26" transform="translate(123.5 164.5)"/>
        <line className="c1" x1="26" y1="27" transform="translate(123.5 190.5)"/>
        <text className="d1" transform="translate(117 274)">
          <tspan x="0" y="0">BACK</tspan>
        </text>
      </g>
    </svg>
  );
}



export default BackArrow;
