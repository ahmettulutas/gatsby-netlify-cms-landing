import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
const Navbar2 = () => {
	const navRef = useRef();
	const toggleNavOnScroll = () => {
		const { body, documentElement } = document;
		body.scrollTop || documentElement.scrollTop > 100
			? navRef.current.classList.remove('transparent')
			: navRef.current.classList.add('transparent');
	};
	useEffect(() => {
		window.addEventListener('scroll', toggleNavOnScroll);
		return () => {
			window.removeEventListener('scroll', toggleNavOnScroll);
		};
	}, []);
	return (
		<nav id='header' className='navbar fixed w-full z-30 top-0 text-white'>
			<div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
				<div className='pl-4 flex items-center'>
					<Link to='/' className='navbar-item navbar-logo' title='Logo'>
						<img
							alt='uzman psikolog meltem ulutaş'
							className='navbar-image'
							src='/img/Meltem.svg'
						/>
					</Link>
				</div>
				<div className='block lg:hidden pr-4 my-0'>
					<button
						id='nav-toggle'
						className='flex items-center p-1 my-auto text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
						<svg
							className='fill-current h-6 w-6'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
				<div
					className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20'
					id='nav-content'>
					<ul className='list-reset lg:flex justify-end flex-1 items-center'>
						<Link
							className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4'
							to='/'>
							ANASAYFA
						</Link>
						<Link
							className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4'
							to='/blog'>
							BLOG
						</Link>
						<Link
							className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4'
							to='/getappointment'>
							İLETİŞİM
						</Link>
						<Link
							className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4'
							to='/getappointment'>
							RANDEVU
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar2;
