import React from 'react';
import Mail from '../img/mail.inline.svg';
import Whatsapp from '../img/whatsapp.inline.svg';
import Linkedin from '../img/linkedin.inline.svg';
import Instagram from '../img/instagram.inline.svg';
import Location from '../img/location.inline.svg';

const ContactInfo = () => (
  <div>
    <ul className='contact-links'>
      <li>
        <a
          href='https://www.instagram.com/psikologmeltemulutas/'
          target='_blank'
          rel='noopener noreferrer'>
          <Location />
        </a>
        <p>Meşrutiyet, Rumeli Cd. No:6, 34983 Şişli/İstanbul</p>
      </li>
      <li>
        <a
          href='https://www.instagram.com/psikologmeltemulutas/'
          target='_blank'
          rel='noopener noreferrer'>
          <Instagram />
        </a>
        <p>İnstagram</p>
      </li>

      <li>
        <a
          href='https://www.linkedin.com/in/meltem-uluta%C5%9F-1094ab1bb/'
          target='_blank'
          rel='noopener noreferrer'>
          <Linkedin />
        </a>
        <p>Linkedin</p>
      </li>
      <li>
        <a
          href='https://api.whatsapp.com/send/?phone=05300954085'
          target='_blank'
          rel='noopener noreferrer'>
          <Whatsapp />
        </a>
        <p>Whatsapp</p>
      </li>
      <li>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:psikolog.meltem.ulutas@gmail.com'>
          <Mail />
        </a>
        <p>Mail</p>
      </li>
    </ul>
  </div>
);
export default ContactInfo;
