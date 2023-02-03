import * as React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';
import { Form } from '../../components/Form';
import ContactInfo from '../../components/ContactInfo';
import { BackgroundTitle } from '../../components/BackgroundTitle';

const encode = data => {
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout title={'Randevu'} description={'Meltem Ulutaş ile iletişime geçin. Psikolog randevusu oluşturun. Psikolojik destek almak için iletişime geçin.'}>
        <Hero title={'Randevu'} background={contact} isHalfHero/>
        <div className='page-container'>
          <BackgroundTitle title={'Randevu'} />
          <h1 className='highlighted'>Randevu Oluşturun</h1>
          <section className='contact flex mobile-column-direction'>
            <div className='contact-info'>
              <ContactInfo />
            </div>
            <Form/>
          </section>
        </div>
      </Layout>
    );
  }
}
