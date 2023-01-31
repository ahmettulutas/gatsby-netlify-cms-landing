import * as React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';
import { Form } from '../../components/Form';

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
      <Layout>
        <Hero title={'Randevu'} background={contact} />
        <div className='container p-auto'>
          <div className='columns is-centered' style={{ padding: '1rem' }}>
            <div className='column is-half' style={{ margin: 'auto' }}>
              <Form title={'Randevu Talebi Oluşturun'}/>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
