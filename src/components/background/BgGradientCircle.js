import React from "react";

function BgGradientCircle() {
  return (
    <svg className="background-gradient__circle" viewBox="4572 73 1328 1328">
      <defs>
        <linearGradient id="ddd" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#ff8b8b"/>
          <stop offset="1" stopColor="#6676ff"/>
        </linearGradient>
      </defs>
      <circle cx="664" cy="664" r="664" fill="url(#ddd)" transform="translate(4572 73)"/>
    </svg>
  );
}

export default BgGradientCircle;
