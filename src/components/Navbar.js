import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import instagram from '../img/social/instagram.svg';

const Navbar = () => {
	const [navState, setNavState] = useState({
		active: false,
		navBarActiveClass: '',
	});

	const navRef = useRef();
	const toggleHamburger = () => {
		setNavState({
			active: !navState.active,
			...(navState.active
				? { navBarActiveClass: 'is-active' }
				: { navBarActiveClass: '' }),
		});
	};

	const toggleNavOnScroll = () => {
		const { body, documentElement } = document;
		body.scrollTop || documentElement.scrollTop > 100
			? (navRef.current.style.height = '50px')
			: (navRef.current.style.height = '100px');
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleNavOnScroll);
		return () => {
			window.removeEventListener('scroll', toggleNavOnScroll);
		};
	}, [navRef]);
	return (
		<nav
			ref={navRef}
			style={{ height: '100px' }}
			className='navbar is-fixed-top'
			role='navigation'
			aria-label='main-navigation'>
			<div className='container'>
				<div className='navbar-brand'>
					<Link to='/' className='navbar-item navbar-logo' title='Logo'>
						<img
							alt='uzman psikolog meltem ulutaş'
							className='navbar-image'
							src='/img/Meltem.svg'
						/>
					</Link>
					{/* Hamburger menu */}
					<div
						className={`navbar-burger burger ${navState.navBarActiveClass}`}
						data-target='navMenu'
						role='menuitem'
						tabIndex={0}
						onKeyPress={() => toggleHamburger()}
						onClick={() => toggleHamburger()}>
						<span />
						<span />
						<span />
					</div>
				</div>
				<div
					id='navMenu'
					className={`navbar-menu ${navState.navBarActiveClass}`}>
					<div className='navbar-end has-text-right'>
						<Link className='navbar-item' to='/'>
							Anasayfa
						</Link>
						<Link className='navbar-item' to='/blog'>
							Blog
						</Link>
						<Link className='navbar-item' to='/contact'>
							Randevu - İletişim
						</Link>
						<a
							className='navbar-item'
							href='https://www.instagram.com/psikologmeltemulutas/'
							target='_blank'
							rel='noopener noreferrer'>
							<span className='icon'>
								<img
									src={instagram}
									alt='instagram link'
								/>
							</span>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
