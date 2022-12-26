import * as React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';
import { Form } from '../../components/Form';

const Contact = () => (
  <Layout title={'Meltem Ulutaş İletişim'}>
    <Hero title={'İletişim'} background={contact} hasDarkBg />
    <div className='container p-3'>
      <div className='columns is-8 is-variable '>
        <div className='column is-half has-text-left'>
          <h1 className='title is-1'>İletişime Geçin</h1>
          <div className='social-media'>
            <a
              href='mailto:psikolog.meltem.ulutas@gmail.com'
              rel='noreferrer'
              target='_blank'
              className='button is-light is-large'>
              <i className='fa fa-envelope' aria-hidden='true'></i>
            </a>
            <a
              href='https://instagram.com/psikologmeltemulutas/'
              rel='noreferrer'
              target='_blank'
              className='button is-light is-large'>
              <i className='fa fa-instagram' aria-hidden='true'></i>
            </a>
            <a
              href='https://api.whatsapp.com/send/?phone=05300954085'
              rel='noreferrer'
              target='_blank'
              className='button is-light is-large'>
              <i className='fa fa-whatsapp' aria-hidden='true'></i>
            </a>
          </div>
        </div>
        <div className='column is-half has-text-left'>
          <Form title={'İletişime Geçin'}/>
        </div>
      </div>
    </div>
  </Layout>
);
export default Contact;