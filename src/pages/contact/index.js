import * as React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';
import { Form } from '../../components/Form';
import ContactInfo from '../../components/ContactInfo';

const Contact = () => (
  <Layout title={'Meltem Ulutaş İletişim'}>
    <Hero title={'İletişim'} background={contact} hasDarkBg />
    <div className='container p-3'>
      <div className='columns is-8 is-variable '>
        <div className='column is-half has-text-left'>
          <Form title={'İletişime Geçin'}/>
        </div>
        <div className='column is-half has-text-left'>
          <ContactInfo />
        </div>
      </div>
    </div>
  </Layout>
);
export default Contact;