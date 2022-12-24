import * as React from 'react';
import { Link } from 'gatsby';
/* import instagram from '../img/social/instagram.svg';
import mail from '../img/social/mail.svg';
import phone from '../img/social/phone.svg'; */

const Footer = () => (
  <footer className='footer'>
    <section className='menu'>
      <ul className='menu-list'>
        <li>
          <Link to='/' className='navbar-item'>Anasayfa</Link>
        </li>
        <li>
          <Link className='navbar-item' to='/contact'>İletişim</Link>
        </li>
        <li>
          <a className='navbar-item' href='/admin/' target='_blank' rel='noopener noreferrer'>Yönetim Paneli</a>
        </li>
      </ul>
    </section>
  </footer>
);

export default Footer;
