import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, background, subheading, isHalfHero }) => (
  <div
    className='hero-main'
    style={{ backgroundImage: `url(${background})`, height: isHalfHero ? '50vh' : '100vh' }}>
    {/* Overlay */}
    <div className='overlay'></div>
    <div className='hero-title-section'>
      {subheading && <h2>{subheading}</h2>}
      <h1 className={`${isHalfHero} ? "small-title" : ""`}>
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
