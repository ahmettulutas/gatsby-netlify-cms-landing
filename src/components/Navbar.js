import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import Logo from '../img/logo.inline.svg';

const Navbar = ({ hasWhiteBg }) => {
  const
    navbar = useRef(),
    navLinks = useRef(),
    hamburger = useRef(),
    toggleHamburger = () => {
      navLinks.current.classList.toggle('open');
      hamburger.current.classList.toggle('toggle');
      Array.prototype.forEach.call(navLinks.current.children, child => {
        child.classList.toggle('fade');
      });
    },

    toggleNavOnScroll = () => {
      const { body, documentElement } = document;
      body.scrollTop || documentElement.scrollTop > 100
        ? navbar.current.classList.remove('transparent')
        : navbar.current.classList.add(`${!hasWhiteBg && 'transparent'}`);
    };

  useEffect(() => {
    window.addEventListener('scroll', toggleNavOnScroll);
    return () => {
      window.removeEventListener('scroll', toggleNavOnScroll);
    };
  }, []);

  return (
    <nav role='navigation' aria-label='main-navigation' className={`nav-bar ${!hasWhiteBg && 'transparent'}`} ref={navbar}>
      <div className='page-container'>
        {/* Logo */}
        <div className="navbar-logo">
          <Link to='/' className='navbar-logo' title='Logo'>
            <Logo />
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div ref={hamburger} className="hamburger" onClick={() => toggleHamburger()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {/* Nav Links */}
        <ul ref={navLinks} className='nav-links'>
          <li className='navbar-item'>
            <Link to='/' activeClassName={'active'}>ANASAYFA</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/blog' activeClassName={'active'}>BLOG</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/contact' activeClassName={'active'}>İLETİŞİM</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/getappointment' activeClassName={'active'}>RANDEVU</Link>
          </li>
          {/* Overlay */}
          <section className='navbar-overlay'></section>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;