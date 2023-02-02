import * as React from 'react';
import Instagram from '../img/instagram.inline.svg';
import Mail from '../img/mail.inline.svg';
import Whatsapp from '../img/whatsapp.inline.svg';
import Linkedin from '../img/linkedin.inline.svg';
const Footer = () => (
  <footer className='footer'>
    <section className='page-container flex space-between mobile-column-direction'>
      <div>
        <p>&copy; 2023 Meltem Ulutaş. Tüm hakları saklıdır.</p>
        <p>Designed by <a href="https://www.linkedin.com/in/ahmet-ulutas/" target="_blank" rel="noreferrer">Ahmet Ulutaş</a></p>
        <a href='/admin/' target='_blank' rel='noopener noreferrer'>Yönetim Paneli</a>
      </div>
      <ul className='footer-links'>
        <li>
          <a
            href='https://www.instagram.com/psikologmeltemulutas/'
            target='_blank'
            rel='noopener noreferrer'>
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/meltem-uluta%C5%9F-1094ab1bb/'
            target='_blank'
            rel='noopener noreferrer'>
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            href='https://api.whatsapp.com/send/?phone=05300954085'
            target='_blank'
            rel='noopener noreferrer'>
            <Whatsapp />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:psikolog.meltem.ulutas@gmail.com'>
            <Mail />
          </a>
        </li>

      </ul>
    </section>
  </footer>
);

export default Footer;
