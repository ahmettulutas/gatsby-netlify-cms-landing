import * as React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';
import { Form } from '../../components/Form';

const Contact = () => (
  <Layout title={'Meltem Ulutaş İletişim'} description={'Meltem Ulutaş ile iletişime geçin. Psikolog randevusu oluşturun. Psikolojik destek almak için iletişime geçin.'}>
    <Hero title={'İletişim'} background={contact} />
    <div className='page-container'>
      <Form title={'İletişime Geçin'}/>
    </div>
  </Layout>
);
export default Contact;