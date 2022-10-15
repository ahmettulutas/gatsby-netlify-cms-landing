import React from 'react';
import PropTypes, { string } from 'prop-types';
const Hero = ({ title, background }) => {
	console.log(background);
	return (
		<div
			className='jumbotron-title'
			style={{ backgroundImage: `url(${background})` }}>
			<h1>{title}</h1>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				strokeWidth='0'
				viewBox='0 0 1440 319'>
				<path
					fill='#fff'
					fillOpacity='1'
					d='M0,256L60,224C120,192,240,128,360,106.7C480,85,600,107,720,138.7C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
			</svg>
		</div>
	);
};

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	background: PropTypes.node.isRequired,
};
export default Hero;
