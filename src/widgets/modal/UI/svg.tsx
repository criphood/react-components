import React, { Dispatch, SetStateAction } from 'react';
import { enableBodyScroll } from 'body-scroll-lock';

const Svg = ({ setModalActive }: { setModalActive: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <svg
      className="svg"
      data-testid="custom-element"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        setModalActive(false);
        enableBodyScroll(document.getElementsByTagName('body')[0]);
      }}
    >
      <defs></defs>
      <title />
      <g id="cross">
        <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
        <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
      </g>
    </svg>
  );
};

export default Svg;
