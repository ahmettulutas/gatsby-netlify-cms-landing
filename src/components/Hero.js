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
<<<<<<< Updated upstream
			{/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 82.21428571428572,161.85714285714286 164.42857142857144,123.71428571428572 302,138 C 439.57142857142856,152.28571428571428 632.4999999999999,219.00000000000003 783,223 C 933.5000000000001,226.99999999999997 1041.5714285714284,168.28571428571428 1144,154 C 1246.4285714285716,139.71428571428572 1343.2142857142858,169.85714285714286 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}
=======
			{/* 	<div className="svg-container" style={{position:"relative"}}>
				<svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
					<g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd">
						<g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
						<path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
						<path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
						<path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
					</g>
					<g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
						<path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
					</g>
					</g>
				</svg>
			</div> */}
>>>>>>> Stashed changes
		</div>
	);
};

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	background: PropTypes.node.isRequired,
};
export default Hero;
