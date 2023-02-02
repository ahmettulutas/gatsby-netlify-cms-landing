import React from 'react';
/* import phone from '../img/social/phone.svg'; */

const ContactInfo = () => (
  <section className='contact-card'>
    <a
      href='https://api.whatsapp.com/send/?phone=05300954085'
      target='_blank'
      rel='noopener noreferrer'>


      <p className='is-size-5-media'>+90 530 095 40 85</p>
    </a>
    <a
      href='https://www.instagram.com/psikologmeltemulutas/'
      target='_blank'
      rel='noopener noreferrer'>

      <p className='is-size-5-media'>instagram.com/psikologmeltemulutas</p>
    </a>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='mailto:psikolog.meltem.ulutas@gmail.com'>

      <p className='is-size-5-media'>psikolog.meltem.ulutas@gmail.com</p>
    </a>
  </section>
);
export default ContactInfo;
