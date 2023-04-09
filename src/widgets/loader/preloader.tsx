import React from 'react';
import './preloader.scss';

const Preloader = () => {
  return (
    <div className="preloader__overlay">
      <div className="preloader"></div>
    </div>
  );
};

export default Preloader;
