import * as React from 'react';
import { Link } from 'gatsby';
import instagram from '../img/social/instagram.svg';
import mail from '../img/social/mail.svg';
import phone from '../img/social/phone.svg';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='columns'>
        <div className='column is-8'>
          <section className='menu'>
            <ul className='menu-list'>
              <li>
                <Link to='/' className='navbar-item'>
									Anasayfa
                </Link>
              </li>
              <li>
                <Link className='navbar-item' to='/contact'>
									İletişim
                </Link>
              </li>
              <li>
                <a
                  className='navbar-item'
                  href='/admin/'
                  target='_blank'
                  rel='noopener noreferrer'>
									Yönetim Paneli
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className='column'>
          <ul className='menu-list'>
            <li>
              <a
                title='instagram'
                className='navbar-item'
                href='https://www.instagram.com/psikologmeltemulutas/'
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src={instagram}
                  alt='instagram'
                  style={{ width: '1rem', height: '1rem' }}
                />
              </a>
            </li>
            <li>
              <a
                title='instagram'
                className='navbar-item'
                href='https://api.whatsapp.com/send/?phone=05300954085'
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src={phone}
                  alt='send message'
                  style={{ width: '1rem', height: '1rem' }}
                />
              </a>
            </li>
            <li>
              <a
                title='instagram'
                className='navbar-item'
                href='mailto:psikolog.meltem.ulutas@gmail.com'
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src={mail}
                  alt='Instagram'
                  style={{ width: '1rem', height: '1rem' }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
