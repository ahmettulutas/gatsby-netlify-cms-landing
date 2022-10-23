import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, background, subheading, hasDarkBg = false }) => {
	return (
		<div
			className='hero-main'
			style={{ backgroundImage: `url(${background})` }}>
			<div className='hero-title-section'>
				{subheading && <h2 className='is-size-5-mobile'>{subheading}</h2>}
				<h1 className={`is-size-1-mobile ${hasDarkBg ? 'invert' : ''}`}>
					{title}
				</h1>
			</div>
			{/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 82.21428571428572,161.85714285714286 164.42857142857144,123.71428571428572 302,138 C 439.57142857142856,152.28571428571428 632.4999999999999,219.00000000000003 783,223 C 933.5000000000001,226.99999999999997 1041.5714285714284,168.28571428571428 1144,154 C 1246.4285714285716,139.71428571428572 1343.2142857142858,169.85714285714286 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}
		</div>
	);
};

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	background: PropTypes.node.isRequired,
};
export default Hero;
