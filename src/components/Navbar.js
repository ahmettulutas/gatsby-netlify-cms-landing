import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import Logo from '../img/logo.inline.svg';

const Navbar = ({ hasWhiteBg }) => {
  const [navState, setNavState] = useState({
      active: false,
      navBarActiveClass: ''
    }),
    navRef = useRef(),
    toggleHamburger = () => {
      setNavState({
        active: !navState.active,
        ...(navState.active
          ? { navBarActiveClass: 'is-active' }
          : { navBarActiveClass: '' })
      });
    },
    toggleNavOnScroll = () => {
      const { body, documentElement } = document;
      body.scrollTop || documentElement.scrollTop > 100
        ? navRef.current.classList.remove('transparent')
        : navRef.current.classList.add(`${hasWhiteBg ? 'hasWhiteBg' : 'transparent'}`);
    };

  useEffect(() => {
    window.addEventListener('scroll', toggleNavOnScroll);

    return () => {
      window.removeEventListener('scroll', toggleNavOnScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className='navbar is-fixed-top transparent'
      role='navigation'
      aria-label='main-navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item navbar-logo' title='Logo'>
            <Logo />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navState.navBarActiveClass}`}
            data-target='navMenu'
            role='menuitem'
            tabIndex={0}
            onKeyPress={() => toggleHamburger()}
            onClick={() => toggleHamburger()}>
            <span style={{ height: '2px' }} />
            <span style={{ height: '2px' }} />
            <span style={{ height: '2px' }} />
          </div>
        </div>
        <div
          id='navMenu'
          className={`navbar-menu ${navState.navBarActiveClass}`}>
          <div className='navbar-end has-text-right'>
            <Link className='navbar-item' to='/' activeClassName={'active'}>
							ANASAYFA
            </Link>
            <Link className='navbar-item' to='/blog' activeClassName={'active'}>
							BLOG
            </Link>
            <Link className='navbar-item' to='/contact' activeClassName={'active'}>
							İLETİŞİM
            </Link>
            <Link className='navbar-item' to='/getappointment' activeClassName={'active'}>
							RANDEVU
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
