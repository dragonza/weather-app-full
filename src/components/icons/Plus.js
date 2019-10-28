import React from 'react';

function Plus({ fill }) {
  return (
    <svg className="add__icon" id="Plus_Icon" data-name="Plus Icon" viewBox="1454.4 326.4 209.1 209.1">
      <defs>
        <filter id="Ellipse_7" width="209.1" height="209.1" x="1454.4" y="326.4" filterUnits="userSpaceOnUse">
          <feOffset dy="3"/>
          <feGaussianBlur result="blur" stdDeviation="3"/>
          <feFlood floodColor="#333" floodOpacity=".1"/>
          <feComposite in2="blur" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g filter="url(#Ellipse_7)">
        <circle id="Ellipse_7-2" cx="95.6" cy="95.6" r="95.6" fill="#f5f8ff" data-name="Ellipse 7"
                transform="translate(1463.4 332.4)"/>
      </g>
      <rect id="Rectangle_3" width="12.8" height="142.9" className="cls-299" data-name="Rectangle 3" rx="5"
            transform="translate(1552.6 358.1)"/>
      <rect id="Rectangle_4" width="12.8" height="142.9" className="cls-299" data-name="Rectangle 4" rx="5"
            transform="rotate(90 603.6 1026.8)"/>
    </svg>
  );
}

export default Plus;