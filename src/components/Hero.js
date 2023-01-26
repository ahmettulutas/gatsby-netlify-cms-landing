import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, background, subheading, hasDarkBg = false }) => (
  <div
    className='hero-main'
    style={{ backgroundImage: `url(${background})` }}>
    {/* Overlay */}
    <div className='overlay'></div>
    <div className='hero-title-section'>
      {subheading && <h2 className='is-size-5-mobile'>{subheading}</h2>}
      <h1 className={`is-size-1-mobile ${hasDarkBg ? 'invert' : ''}`} style={{ fontWeight: 600 }}>
        {title}
      </h1>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.node.isRequired
};
export default Hero;
