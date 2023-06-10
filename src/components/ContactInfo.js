import React from 'react';
import Mail from '../img/mail.inline.svg';
import Whatsapp from '../img/whatsapp.inline.svg';
import Linkedin from '../img/linkedin.inline.svg';
import Instagram from '../img/instagram.inline.svg';
import Location from '../img/location.inline.svg';
import { contactLinks } from '../lib/constants';

const ContactInfo = () => {
  const IconComponent = {
    mail: Mail,
    whatsapp: Whatsapp,
    linkedin: Linkedin,
    instagram: Instagram,
    location: Location
  };

  return (
    <div>
      <ul className='contact-links'>
        {contactLinks.map(item => {
          const Icon = IconComponent[item.icon];
          return (
            <li key={item.id}>
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'>
                <Icon />
                <p>{item.label}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactInfo;
