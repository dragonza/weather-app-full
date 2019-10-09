import React from 'react';

function Logo({
  name = 'Logo',
  fill = '#432c85',
  fontFamily = 'SegoeUI-Semibold,Segoe UI',
  fontSize = '30',
  fontWeight = '600'
}) {
  return (
    <svg viewBox="150.3 22.2 213.7 42.8">
      <path fill="#00ff9b" d="M150.3 65V22.2L193 65z" data-name="Path 1" />
      <path fill="#003eff" d="M193.1 65h-42.8L193 22.2z" data-name="Path 2" />
      <text
        className="logo__text"
        fill={fill}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing=".1em"
        transform="translate(237 56)"
      >
        <tspan x="0" y="0">
          {name}
        </tspan>
      </text>
    </svg>
  );
}

export default Logo;
