import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';
import { Form } from '../../components/Form';
import { BackgroundTitle } from '../../components/BackgroundTitle';
import ContactInfo from '../../components/ContactInfo';


const Contact = () => (
  <Layout title={'Meltem Ulutaş İletişim'} description={'Meltem Ulutaş ile iletişime geçin. Psikolog randevusu oluşturun. Psikolojik destek almak için iletişime geçin.'}>
    <Hero title={'İletişim'} background={contact} isHalfHero />
    <section className='page-container'>
      <BackgroundTitle title={'İletişim'} />
      <h1 className='highlighted'>İletişim Formu</h1>
      <div className='contact flex mobile-column-direction'>
        <div className='contact-info'>
          <ContactInfo />
        </div>
        <Form/>
      </div>
    </section>
  </Layout>
);
export default Contact;